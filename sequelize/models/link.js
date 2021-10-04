const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Link = sequelize.define('link', {
    url: DataTypes.STRING,
    directUrl: DataTypes.STRING,
    provider: DataTypes.STRING,
    custom: DataTypes.STRING
  })

  return Link
}
