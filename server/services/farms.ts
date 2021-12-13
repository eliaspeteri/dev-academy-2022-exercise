/* Types */
import { Farm } from '../types';

/* Farm (Mongoose) Model */
import FarmModel from '../models/farm';

const getAll = async (): Promise<Farm[]> => await FarmModel.find({});

const FarmService = {
  getAll
};

export default FarmService;
