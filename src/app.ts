import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import conversationRoutes from './routes/conversationRoutes';
import { sequelize } from './database';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/conversations', conversationRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((err: any) => {
  console.error('Unable to connect to the database:', err);
});
