//Cremamos la tabla TestEmpresarial utilizando sequelize en la base de datos

module.exports = (sequelize, DataTypes) =>
	sequelize.define('TestEmpresarial', {
	    userName: {
      		type: DataTypes.STRING,
      		unique: true
    	},
    	gradoEnergia: DataTypes.STRING,
		liderazgo: DataTypes.STRING,
		modeDeVida: DataTypes.STRING,
		naturalezaSocial: DataTypes.STRING,
		adaptacionAlTrabajo: DataTypes.STRING,
		naturalezaEmocional: DataTypes.STRING,
		subordinacion: DataTypes.STRING,		
  	})
