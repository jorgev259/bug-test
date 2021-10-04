const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const Artist = sequelize.define('artist', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING
  },
  {
    freezeTableName: true
  }
  )
  return Artist
}
