import React from 'react';
import { Text, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { PetCardProps } from './PetCard.props';
import { getPetCardStyles } from './PetCard.styles';

export const PetCard: React.FC<PetCardProps> = ({ name, image, onPress }) => {
  const theme = useColorScheme();
  const styles = getPetCardStyles(theme);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};
