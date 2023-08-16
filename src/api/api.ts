import axios from 'axios';
import { GET_PETS_URL } from './api.urls';
import { PetResult } from './api.props';

export const getPets = async (): Promise<PetResult[] | undefined> => {
  try {
    const response = await axios.get<PetResult[]>(GET_PETS_URL);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    // add error logging
    throw error;
  }
};
