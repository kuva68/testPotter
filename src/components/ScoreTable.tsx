import {ImageBackground, StyleSheet, View} from 'react-native';
import {Icons} from '../constants/icons';
import React from 'react';
import {Text} from './Text';
import {scaledSize} from '../utils/scaleSize';
export const ScoreTable = ({
  success,
  failed,
}: {
  success: number;
  failed: number;
}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        resizeMode="stretch"
        source={Icons.SmallRect}
        style={styles.image}>
        <Text preset="subTitle">{Number(success) + Number(failed) || 0}</Text>
        <Text>total</Text>
      </ImageBackground>
      <ImageBackground
        resizeMode="stretch"
        source={Icons.SmallRect}
        style={styles.image}>
        <Text preset="subTitle">{success ?? 0}</Text>
        <Text>success</Text>
      </ImageBackground>
      <ImageBackground
        resizeMode="stretch"
        source={Icons.SmallRect}
        style={styles.image}>
        <Text preset="subTitle">{failed ?? 0}</Text>
        <Text>failed</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: scaledSize(100),
    height: scaledSize(70),
    justifyContent: 'center',
    gap: 2,
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
});
