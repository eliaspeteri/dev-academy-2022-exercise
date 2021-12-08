import { Schema, model } from 'mongoose';

/* Types */
import { Reading } from '../types';

export interface IReading extends Document {
  datetime: Date;
  sensorType: string;
  value: number;
}

const readingSchema: Schema = new Schema<Reading>({
  datetime: {
    type: Date,
    required: false
  },
  sensorType: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});

export default model<IReading>('Reading', readingSchema);
