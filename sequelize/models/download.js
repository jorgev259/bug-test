const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Download = sequelize.define('download', {
    title: DataTypes.STRING,
    small: DataTypes.BOOLEAN
  })

  return Download
}
