module.exports = (sequelize, DataTypes) =>
	sequelize.define('TestPersonal', {
	    userName: {
      		type: DataTypes.STRING,
      		unique: true
    	},
        apertura: DataTypes.FLOAT,    		
        escrupulosidad: DataTypes.FLOAT,
        extroversion: DataTypes.FLOAT,
        amabilidad: DataTypes.FLOAT,
        neuroticismo: DataTypes.FLOAT
  	})