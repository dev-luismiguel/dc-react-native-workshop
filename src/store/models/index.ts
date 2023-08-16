import { Models } from '@rematch/core';
import { petsModel } from './pets.model';

export interface RootModel extends Models<RootModel> {
  pets: typeof petsModel;
}

export const models: RootModel = {
  pets: petsModel,
};
