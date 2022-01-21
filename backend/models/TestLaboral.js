module.exports = (sequelize, DataTypes) =>
	sequelize.define('TestLaboral', {
	    userName: {
      		type: DataTypes.STRING,
      		unique: true
    	},
        personalidad: DataTypes.STRING
  	})