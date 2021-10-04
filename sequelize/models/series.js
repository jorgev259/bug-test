const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Series = sequelize.define('series', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  }
  )

  return Series
}
