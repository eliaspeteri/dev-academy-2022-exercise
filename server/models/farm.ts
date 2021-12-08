import { Schema, model } from 'mongoose';

/* Types */
import { Farm, Reading } from '../types';

export interface IFarm extends Document {
  name: string;
  id: number;
  readings: Reading[];
}

const farmSchema: Schema = new Schema<Farm>({
  name: {
    type: String,
    required: true,
    unique: false,
    minlength: 4
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  readings: {
    type: [Object],
    required: true,
    unique: true
  }
});

farmSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export default model<IFarm>('Farm', farmSchema);
