module.exports = (sequelize, DataTypes) =>
	sequelize.define('MBTIResultados', {
	    email: {
      		type: DataTypes.STRING,
      		unique: true
    	},
        personalidad: DataTypes.STRING
  	})