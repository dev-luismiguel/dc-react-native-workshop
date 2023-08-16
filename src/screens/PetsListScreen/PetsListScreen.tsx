import React from 'react';
import { View } from 'react-native';
import { Text } from 'src/components';
import styles from './PetsListScreen.styles';

export const PetsListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text text="PetsListScreen" />
    </View>
  );
};
