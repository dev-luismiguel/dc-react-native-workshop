import { ColorSchemeName, StyleSheet } from 'react-native';
import { COLORS, SPACING } from 'src/themes';

export const getPetDetailsScreenStyles = (theme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS(theme).surface,
    },
    image: {
      width: '100%',
      height: 300,
    },
    detailsOverlay: {
      padding: SPACING.SMALL,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 6,
      color: COLORS(theme).onPrimaryContainer,
    },
    detailText: {
      fontSize: 16,
      marginVertical: 4,
      color: COLORS(theme).onPrimaryContainer,
    },
    description: {
      fontSize: 16,
      marginVertical: 4,
      fontStyle: 'italic',
      color: COLORS(theme).onPrimaryContainer,
    },
    map: {
      flex: 1,
      width: '100%',
      marginTop: 16,
      borderRadius: 15,
      overflow: 'hidden',
      marginBottom: 16,
      elevation: 3, // for android
      shadowOffset: { width: 0, height: 2 }, // for iOS
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
  });
