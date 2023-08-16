import { ColorSchemeName, StyleSheet } from 'react-native';
import { COLORS, SPACING } from 'src/themes';

export const getPetCardStyles = (theme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      margin: SPACING.SMALL,
      backgroundColor: COLORS(theme).primaryContainer,
      borderColor: COLORS(theme).cardBorder,
      borderRadius: 15,
      overflow: 'hidden',
      elevation: 5, // Android shadow
      shadowColor: '#000', // iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    image: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
    },
    name: {
      padding: SPACING.SMALL,
      fontSize: 16,
      fontWeight: 'bold',
      color: COLORS(theme).onPrimaryContainer,
    },
  });
