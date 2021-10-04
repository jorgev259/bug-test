const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const OstHistory = sequelize.define('ostHistory', {
    updatedData: DataTypes.JSON
  })

  return OstHistory
}
