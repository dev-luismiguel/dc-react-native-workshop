import React from 'react';
import { Image, ScrollView, View, useColorScheme } from 'react-native';
import { ROUTES } from '../../navigation/routes';
import { NavigationProps } from '../../navigation/useTypedNavigation';
import { getPetDetailsScreenStyles } from './PetDetailsScreen.styles';
import { Text } from 'src/components';
import { store } from 'src/store/store';

export const PetDetailsScreen: React.FC<NavigationProps<ROUTES.PetDetails>> = ({
  route,
}) => {
  const theme = useColorScheme();
  const styles = getPetDetailsScreenStyles(theme);

  const { petId } = route.params;

  const pet = store.dispatch.pets.getPetById(petId);

  return (
    <>
      {pet && (
        <ScrollView style={styles.container}>
          <Image source={{ uri: pet.image }} style={styles.image} />
          <View style={styles.detailsOverlay}>
            <Text style={styles.name} text={pet.name} />
            <Text
              style={styles.detailText}
              i18nKey="petDetailsScreen.breed"
              i18nOptions={{ value: pet.breed }}
            />
            <Text
              style={styles.detailText}
              i18nKey="petDetailsScreen.weight"
              i18nOptions={{ value: pet.weight }}
            />
            <Text style={styles.description} text={pet.description} />
          </View>
          {/* <MapView
              style={styles.map}
              initialRegion={{
                latitude: pet.location.latitude,
                longitude: pet.location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker coordinate={pet.location} title={pet.name} />
            </MapView> */}
        </ScrollView>
      )}
    </>
  );
};
