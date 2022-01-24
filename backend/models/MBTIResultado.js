module.exports = (sequelize, DataTypes) =>
	sequelize.define('MBTIResultados', {
	    email: {
      		type: DataTypes.STRING,
      		unique: true
    	},
        extroversion: DataTypes.FLOAT,
		sensibilidad: DataTypes.FLOAT,
		pensamiento: DataTypes.FLOAT,
		juicio: DataTypes.FLOAT
  	})