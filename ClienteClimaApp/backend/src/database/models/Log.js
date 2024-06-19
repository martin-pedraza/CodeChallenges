module.exports = (sequelize, Datatypes) => {
	const Log = sequelize.define(
		'Log',
		{
			id: {
				type: Datatypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			error: { type: Datatypes.STRING(255), allowNull: false },
		},
		{
			camelCase: false,
			timestamps: false,
			tableName: 'logs'
		}
	);
	return Log;
};