const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Class = sequelize.define('class', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  },
  {
    freezeTableName: true
  }
  )

  return Class
}
