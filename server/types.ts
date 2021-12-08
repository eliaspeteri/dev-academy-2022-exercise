export interface Reading {
  datetime: Date;
  sensorType: string;
  value: number;
}

export interface Farm {
  name: string;
  id: number;
  readings: Reading[];
}
