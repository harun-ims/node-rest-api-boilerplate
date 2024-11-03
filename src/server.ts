import dotenv from 'dotenv';
import { app } from './app';
import { connectDB } from './.config/database';
dotenv.config();

// Connect to database
connectDB().then((connectionInstance) => {
  console.log(`DB host [${connectionInstance.connection.host}] connection successful!`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API is listening in [${process.env.NODE_ENV}]. port ${PORT}, pid ${process.pid}`);
});
