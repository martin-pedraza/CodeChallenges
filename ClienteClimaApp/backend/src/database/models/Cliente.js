module.exports = (sequelize, Datatypes) => {
	const Cliente = sequelize.define(
		'Cliente',
		{
			id: {
				type: Datatypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nombres: { type: Datatypes.STRING(50), allowNull: false },
			apellidos: { type: Datatypes.STRING(50), allowNull: false },
			fechaDeNacimiento: { type: Datatypes.STRING(50), allowNull: true },
			cuit: { type: Datatypes.STRING(50), allowNull: false },
			domicilio: { type: Datatypes.STRING(100), allowNull: true },
			telefonoCelular: { type: Datatypes.STRING(50), allowNull: false },
			email: { type: Datatypes.STRING(100), allowNull: true },
		},
		{
			camelCase: false,
			timestamps: false,
			tableName: 'clientes'
		}
	);
	return Cliente;
};