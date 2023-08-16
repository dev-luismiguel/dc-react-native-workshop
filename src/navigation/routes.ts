import { PetDetailsScreenProps } from '../screens';

export enum ROUTES {
  PetsList = 'PetsList',
  PetDetails = 'PetDetails',
}

export type RoutesParamList = {
  [ROUTES.PetsList]: undefined;
  [ROUTES.PetDetails]: PetDetailsScreenProps;
};
