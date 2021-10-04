const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  sequelize.define('animation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: { type: DataTypes.STRING, unique: true },
    subTitle: { type: DataTypes.STRING },
    releaseDate: DataTypes.DATEONLY
  }, { freezeTableName: true })

  sequelize.define('studio', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, { freezeTableName: true })
}
