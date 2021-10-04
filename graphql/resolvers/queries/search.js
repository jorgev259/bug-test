const { Op } = require('sequelize')
const info = require('../../../config/info.json')

const searchPage = (args, options, db) => {
  const { limit, page, model } = args

  if (limit !== undefined) {
    options.limit = limit
    options.offset = limit * page
  }

  return db.models[model].findAndCountAll(options)
}

module.exports = {
  Query: {
    searchAlbum: (parent, args, { db }) => {
      const { title = '', classes = info.classes, limit, page = 0, order = ['createdAt'], mode = 'DESC', status = ['show'] } = args
      const titleWords = title.split(' ')

      return searchPage({ limit, page, model: 'ost' }, {
        where: {
          [Op.or]: [
            { [Op.and]: titleWords.map(t => ({ title: { [Op.like]: `%${t}%` } })) },
            { [Op.and]: titleWords.map(t => ({ subTitle: { [Op.like]: `%${t}%` } })) }
          ],
          status: { [Op.in]: status }
        },
        include: [{ model: db.models.class, where: { name: { [Op.in]: classes } } }],
        order: order.map(o => [o, mode])
      }, db)
    },

    searchAlbumByArtist: async (parent, { name, classes = info.classes, limit, page = 0, order = ['createdAt'], mode = 'DESC', status = ['show'] }, { db }) => {
      return searchPage({ limit, page, model: 'ost' }, {
        where: { status: { [Op.in]: status } },
        include: [
          { model: db.models.class, where: { name: { [Op.in]: classes } } },
          { model: db.models.artist, where: { name: { [Op.like]: `%${name}%` } } }
        ],
        order: order.map(o => [o, mode])
      }, db)
    },
    searchAnimation: (parent, { title = '', limit, page = 0, order = 'createdAt', mode = 'DESC' }, { db }) => searchPage({ title, limit, page, model: 'animation' }, {
      where: { title: { [Op.like]: `%${title}%` } },
      order: [[order, mode]]
    }, db),
    searchStudio: (parent, { name = '', limit, page = 0, order = 'createdAt', mode = 'DESC' }, { db }) => searchPage({ name, limit, page, model: 'studio' }, {
      where: { name: { [Op.like]: `%${name}%` } },
      order: [[order, mode]]
    }, db),
    searchGame: (parent, { name = '', limit, page = 0, order = 'createdAt', mode = 'DESC' }, { db }) => searchPage({ name, limit, page, model: 'game' }, {
      where: { name: { [Op.like]: `%${name}%` } },
      order: [[order, mode]]
    }, db),
    searchSeries: (parent, { name = '', limit, page = 0, order = 'createdAt', mode = 'DESC' }, { db }) => searchPage({ name, limit, page, model: 'series' }, {
      where: { name: { [Op.like]: `%${name}%` } },
      order: [[order, mode]]
    }, db)
  }
}
