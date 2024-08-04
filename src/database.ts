import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.POSTGRES_DB || 'shalom',
  process.env.POSTGRES_USER || 'admin',
  process.env.POSTGRES_PASSWORD || 'Letsmakeshalom!24',
  {
    host: process.env.POSTGRES_HOST || 'e2e-107-79.ssdcloudindia.net',
    port: Number(process.env.DATABASE_PORT) || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: false
    }
  }
);
