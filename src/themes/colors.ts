import { ColorSchemeName } from 'react-native';

export const COLORS = (theme: ColorSchemeName) => {
  const isDark = theme === 'dark';

  return {
    surface: isDark ? '#001F2A' : '#FAFCFF',
    primaryContainer: isDark ? '#00458F' : '#D7E2FF',
    onPrimaryContainer: isDark ? '#D7E2FF' : '#001B3F',
    cardBorder: isDark ? '#39485A' : '#E0E2E5',
  };
};
