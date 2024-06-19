module.exports = (sequelize, Datatypes) => {
	const Nota = sequelize.define(
		'Nota',
		{
			id: {
				type: Datatypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			texto: { type: Datatypes.TEXT, allowNull: false },
			estaArchivada: { type: Datatypes.BOOLEAN, allowNull: false },
			usuarioId: { type: Datatypes.INTEGER, allowNull: false },
		},
		{
			camelCase: false,
			timestamps: false,
			tableName: 'notas'
		}
	);

    Nota.associate = function(models) {
		Nota.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
        Nota.belongsToMany(models.Etiqueta, {
            through: 'etiquetas_notas',
            foreignKey: 'notaId',
            otherKey: 'etiquetaId',
			timestamps: false,
        });
    };

	return Nota;
};