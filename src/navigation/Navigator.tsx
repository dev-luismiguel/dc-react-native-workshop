import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES, RoutesParamList } from './routes';
import { PetDetailsScreen, PetsListScreen } from '../screens';
import { useTranslation } from 'react-i18next';
import { COLORS } from 'src/themes';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator<RoutesParamList>();

const Navigator: React.FC = () => {
  const { t } = useTranslation();
  const theme = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.PetsList}
        screenOptions={{
          headerStyle: { backgroundColor: COLORS(theme).primaryContainer },
          headerTintColor: COLORS(theme).onPrimaryContainer,
        }}>
        <Stack.Screen
          name={ROUTES.PetsList}
          component={PetsListScreen}
          options={{ title: t('petsListScreen.title') }}
        />
        <Stack.Screen
          name={ROUTES.PetDetails}
          component={PetDetailsScreen}
          options={{ title: t('petDetailsScreen.title') }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
