import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from './routes';

export const useTypedNavigation = () =>
  useNavigation<NativeStackNavigationProp<RoutesParamList>>();

export type NavigationProps<T extends keyof RoutesParamList> = {
  navigation: NativeStackNavigationProp<RoutesParamList, T>;
  route: RouteProp<RoutesParamList, T>;
};
