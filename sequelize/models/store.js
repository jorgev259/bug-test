const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Store = sequelize.define('store', {
    url: DataTypes.STRING,
    provider: DataTypes.STRING
  })
  return Store
}
