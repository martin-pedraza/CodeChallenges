module.exports = (sequelize, Datatypes) => {
	const Usuario = sequelize.define(
		'Usuario',
		{
			id: {
				type: Datatypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			usuario: { type: Datatypes.STRING(100), allowNull: false },
			clave: { type: Datatypes.STRING(100), allowNull: false },
		},
		{
			camelCase: false,
			timestamps: false,
			tableName: 'usuarios'
		}
	);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Nota, { foreignKey: 'usuarioId' });
    };

	return Usuario;
};