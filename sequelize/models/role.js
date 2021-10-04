const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    permissions: DataTypes.JSON
  })

  return Role
}
