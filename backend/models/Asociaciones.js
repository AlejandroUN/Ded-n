module.exports = (sequelize, DataTypes) =>
	sequelize.define('Asociaciones', {
	    id1: {
            primaryKey: true,
      		type: DataTypes.INTEGER,      		
    	},
        id2: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            
        }
  	})