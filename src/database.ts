import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'koyebdb',
  process.env.DATABASE_USER || 'koyeb-adm',
  process.env.DATABASE_PASSWORD || 'QS2Riwj0gkoC',
  {
    host: process.env.DATABASE_HOST || 'ep-autumn-shape-a2fl96f4.eu-central-1.pg.koyeb.app',
    port: Number(process.env.DATABASE_PORT) || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);
