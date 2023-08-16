import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import i18n from '../../i18n/i18n';

type TextProps = {
  i18nKey?: string; // key for the i18n translation
  i18nOptions?: object; // key for the i18n translation
  text?: string; // plain text to be displayed
} & RNTextProps; // extending React Native's Text properties

export const Text: React.FC<TextProps> = ({
  i18nKey,
  i18nOptions,
  text,
  ...props
}) => {
  let displayText = text;

  if (i18nKey) {
    displayText = i18n.t(i18nKey, i18nOptions);
  }

  return <RNText {...props}>{displayText}</RNText>;
};
