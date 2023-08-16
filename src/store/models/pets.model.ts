import { createModel } from '@rematch/core';
import { RootModel } from '.';

type PetState = {};

export const petsModel = createModel<RootModel>()({
  state: {} as PetState,
  reducers: {},
  effects: () => ({}),
});
