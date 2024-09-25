import React from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import {Text} from './Text';
import {theme} from '../theme/themes';

const TextField = ({
  title,
  text,
  textStyle,
  titleStyle,
}: {
  title: string;
  text: string;
  textStyle?: TextStyle;
  titleStyle?: TextStyle;
}) => {
  return (
    <View style={styles.main}>
      <Text style={[styles.copiedText, textStyle]}>{title}:</Text>
      <Text style={[styles.title, titleStyle]}>{text}</Text>
    </View>
  );
};
export default TextField;
const styles = StyleSheet.create({
  copiedText: {
    color: theme.colors.dynamicBlack,
  },
  main: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  title: {
    color: theme.colors.text,
  },
});
