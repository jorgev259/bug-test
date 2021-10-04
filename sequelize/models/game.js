const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Game = sequelize.define('game', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING

    },
    releaseDate: DataTypes.DATEONLY
  },
  {
    freezeTableName: true
  })

  return Game
}
