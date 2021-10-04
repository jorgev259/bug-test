const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  },
  {
    freezeTableName: true
  })

  return Category
}
