import {TextStyle, StyleSheet} from 'react-native';

import {scaledSize} from '../../utils/scaleSize';
import {theme} from '../../theme/themes';

const BASE: TextStyle = {
  fontSize: scaledSize(14),
  lineHeight: scaledSize(18),
  fontWeight: '400',
  color: theme.colors.text,
};

interface ITextStyles {
  default: TextStyle;
  title: TextStyle;
  secondary: TextStyle;
  tertiary: TextStyle;
  accentTitle: TextStyle;
  accentLight: TextStyle;
  error: TextStyle;
  buttonText: TextStyle;
  subTitle: TextStyle;
}

export type TextPreset = keyof ITextStyles;

export const darkStyle = StyleSheet.create<ITextStyles>({
  default: {...BASE, color: theme.colors.text},

  title: {
    ...BASE,
    fontSize: scaledSize(20),
    lineHeight: scaledSize(24),
    fontWeight: '700',
  },
  subTitle: {
    ...BASE,
    fontSize: scaledSize(18),
    lineHeight: scaledSize(22),
    fontWeight: '600',
  },
  accentTitle: {
    ...BASE,
    fontSize: scaledSize(22),
    lineHeight: scaledSize(26),
    fontWeight: '700',
    color: theme.colors.primary,
  },
  accentLight: {
    ...BASE,
    color: theme.colors.primary,
    fontSize: scaledSize(12),
    lineHeight: scaledSize(18),
  },
  secondary: {
    ...BASE,
    fontSize: scaledSize(18),
    lineHeight: scaledSize(21),
    color: theme.colors.secondaryText,
  },
  tertiary: {
    ...BASE,
    fontSize: 12,
    lineHeight: 16,
  },
  error: {
    ...BASE,
    color: theme.colors.red,
    fontSize: scaledSize(12),
    lineHeight: scaledSize(18),
    height: scaledSize(20),
  },
  buttonText: {
    ...BASE,
  },
});
