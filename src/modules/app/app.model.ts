import { Schema, model, Document, Model } from 'mongoose';

export interface AppInput {
  name: string;
}

// Define an interface for User document
export interface IAppDoc extends AppInput, Document {
  createdAt: Date;
  updatedAt: Date;
}

interface IUserModel extends Model<IAppDoc> {
  // Add static methods here
}

const userSchema = new Schema<IAppDoc>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IAppDoc, IUserModel>('App', userSchema);

export { User };
