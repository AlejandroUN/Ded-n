module.exports = (sequelize, DataTypes) =>
	sequelize.define('Asociaciones', {
	    idPrimerAsociado: {
            primaryKey: true,
      		type: DataTypes.INTEGER,      		
    	},
        emailPrimerAsociado: DataTypes.INTEGER,
        afinidadEscrupulosidad: DataTypes.INTEGER,
        afinidadExtroversion: DataTypes.INTEGER,
        afinidadAmabilidad: DataTypes.INTEGER,
        afinidadNeuroticismo: DataTypes.INTEGER,
        idSegundoAsociado: {
            primaryKey: true,
            type: DataTypes.INTEGER,         
        }
  	})