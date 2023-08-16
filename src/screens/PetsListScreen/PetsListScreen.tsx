import React, { useEffect } from 'react';
import { FlatList, useColorScheme } from 'react-native';
import { ROUTES } from '../../navigation/routes';
import { useTypedNavigation } from '../../navigation/useTypedNavigation';
import { PetCard } from 'src/components';
import { getPetsListScreenStyles } from './PetsListScreen.styles';
import { RootState, store } from 'src/store/store';
import { useSelector } from 'react-redux';

export const PetsListScreen: React.FC = () => {
  const theme = useColorScheme();
  const styles = getPetsListScreenStyles(theme);
  const navigation = useTypedNavigation();

  const { loading, list: petsList } = useSelector(
    (state: RootState) => state.pets,
  );
  const { fetchListOfPets } = store.dispatch.pets;

  useEffect(() => {
    fetchListOfPets();
  }, [fetchListOfPets]);

  return (
    <>
      {!loading && (
        <FlatList
          data={petsList}
          keyExtractor={(item) => item.id.toString()}
          style={styles.container}
          renderItem={({ item }) => (
            <PetCard
              name={item.name}
              image={item.image}
              onPress={() =>
                navigation.navigate(ROUTES.PetDetails, { petId: item.id })
              }
            />
          )}
        />
      )}
    </>
  );
};
