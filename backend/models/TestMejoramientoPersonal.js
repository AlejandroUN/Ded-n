//Cremamos la tabla TestMejoramientoPersonal utilizando sequelize en la base de datos

module.exports = (sequelize, DataTypes) =>
	sequelize.define('TestMejoramientoPersonal', {
	    userName: {
      		type: DataTypes.STRING,
      		unique: true
    	},
    	teoretico: DataTypes.INTEGER,
		economico: DataTypes.INTEGER,
		estetico: DataTypes.INTEGER,
		social: DataTypes.INTEGER,
		politico: DataTypes.INTEGER,
		religioso: DataTypes.INTEGER,		
  	})