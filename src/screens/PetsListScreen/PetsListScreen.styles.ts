import { ColorSchemeName, StyleSheet } from 'react-native';
import { COLORS } from 'src/themes';

export const getPetsListScreenStyles = (theme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS(theme).surface,
    },
  });
