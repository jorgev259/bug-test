const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const Disc = sequelize.define('disc', {
    number: DataTypes.INTEGER,
    body: DataTypes.TEXT
  })

  return Disc
}
