import { Sequelize } from 'sequelize-typescript';
import { sequelizeConfig } from './sequelize.config';

async function testDatabaseConnection() {
  const sequelize = new Sequelize({
    ...sequelizeConfig,
    logging: false,
  });

  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  } finally {
    await sequelize.close();
  }
}

testDatabaseConnection();
