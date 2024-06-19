module.exports = (sequelize, Datatypes) => {
	const Etiqueta = sequelize.define(
		'Etiqueta',
		{
			id: {
				type: Datatypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nombre: { type: Datatypes.STRING(100), allowNull: false },
		},
		{
			camelCase: false,
			timestamps: false,
			tableName: 'etiquetas'
		}
	);

    Etiqueta.associate = function(models) {
        Etiqueta.belongsToMany(models.Nota, {
            through: 'etiquetas_notas',
            foreignKey: 'etiquetaId',
            otherKey: 'notaId',
			timestamps: false,
        });
    };

	return Etiqueta;
};