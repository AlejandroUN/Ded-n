//Cremamos la tabla User utilizando sequelize en la base de datos

module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {    
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    nick: DataTypes.STRING,
    password: DataTypes.STRING,
    birth: DataTypes.STRING,
    gender: DataTypes.STRING,
    newgender: DataTypes.STRING,
    orientation: DataTypes.STRING,
    neworientation: DataTypes.STRING
  })

