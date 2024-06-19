require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Sincronización con la base de datos completada.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  })
  .finally(() => {
    sequelize.close();
  });
