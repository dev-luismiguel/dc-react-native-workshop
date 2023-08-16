import React from 'react';
import { View } from 'react-native';
import { Text } from 'src/components';
import styles from './PetDetailsScreen.styles';

export const PetDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text text="PetDetailsScreen" />
    </View>
  );
};
