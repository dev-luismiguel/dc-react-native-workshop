import { ColorSchemeName } from 'react-native';

export const COLORS = (theme: ColorSchemeName) => {
  const isDark = theme === 'dark';

  return {
    surface: isDark ? '#001F2A' : '#FAFCFF',
    primaryContainer: isDark ? '#00458F' : '#D7E2FF',
    onPrimaryContainer: isDark ? '#D7E2FF' : '#001B3F',
    cardBorder: isDark ? '#39485A' : '#E0E2E5',

    // surfaceTint: isDark ? '#ABC7FF' : '#205DB0',
    // onSurface: isDark ? '#001F2A' : '#BFE9FF',

    // primary: isDark ? '#FF6347' : '#FF4500', // Tomato-ish
    // background: isDark ? '#181818' : '#F7F9FC', // Slightly off-black
    // secondaryBackground: isDark ? '#1E1E1E' : '#F5F5F5',
    // text: isDark ? '#EAEAEA' : '#121212',
    // secondaryText: isDark ? '#B0B0B0' : '#686868',
    // border: isDark ? '#333333' : '#E0E0E0',
    // accent: isDark ? '#FFC107' : '#FF9800', // A warm yellow-orange
    // error: isDark ? '#EF5350' : '#E53935',
    // success: isDark ? '#66BB6A' : '#43A047',

    // headerColor: isDark ? '#212F3C' : '#E8EAF6',

    // cardText: isDark ? '#BDC3C7' : '#2C3E50',
    // cardBackground: isDark ? '#2C3E50' : '#FFFFFF',
  };
};
