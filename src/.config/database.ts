import mongoose from 'mongoose';

const constructDatabaseUrl = (mongoUri: string, dbName: string): string => {
  return `${mongoUri}/${dbName}`;
};

export const connectDB = (): Promise<typeof mongoose> => {
  const mongoUri = process.env.MONGO_URI;
  const dbName = process.env.DB_NAME;

  const DATABASE_URL = constructDatabaseUrl(mongoUri!, dbName!);

  return mongoose.connect(DATABASE_URL);
};
