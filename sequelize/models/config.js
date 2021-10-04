const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const config = sequelize.define('config', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      defaultValue: ''
    }
  },
  {
    freezeTableName: true
  }
  )

  return config
}
