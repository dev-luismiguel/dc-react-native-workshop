import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { PetResult } from 'src/api/api.props';
import { getPets } from 'src/api/api';
import { RootState } from '../store';

type PetState = {
  loading: boolean;
  list: PetResult[];
};

export const petsModel = createModel<RootModel>()({
  state: {
    loading: false,
    list: [],
  } as PetState,
  reducers: {
    setLoading(state, loading: boolean) {
      return { ...state, loading };
    },
    setList(state, list: PetResult[]) {
      return { ...state, list };
    },
  },
  effects: (dispatch) => ({
    async fetchListOfPets() {
      try {
        dispatch.pets.setLoading(true);
        const list = await getPets();
        list && dispatch.pets.setList(list);
      } catch (error) {
      } finally {
        dispatch.pets.setLoading(false);
      }
    },
    getPetById(id: number, state: RootState): PetResult | undefined {
      return state.pets.list.find((pet) => pet.id === id);
    },
  }),
});
