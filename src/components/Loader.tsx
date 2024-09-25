import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {FadeInDown, FadeOutDown} from 'react-native-reanimated';
import {useAppStore} from '../store/appStore';
import {Text} from './Text';
import {scaledSize} from '../utils/scaleSize';
export const Loader = () => {
  const {loadingTitle, loadingText} = useAppStore();
  useEffect(() => {
    return () => {
      if (loadingTitle || loadingText) {
        useAppStore.setState({loadingText: '', loadingTitle: ''});
      }
    };
  }, [loadingTitle, loadingText]);
  return (
    <Animated.View
      exiting={FadeOutDown}
      entering={FadeInDown}
      style={styles.container}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#000" />
      </View>
      {loadingTitle && (
        <Text style={styles.text} preset="title">
          {loadingTitle}
        </Text>
      )}
      {loadingText && <Text style={styles.text}>{loadingText}</Text>}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 1000,
    gap: 16,
    paddingHorizontal: 20,
  },
  view: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  text: {textAlign: 'center', fontSize: scaledSize(17)},
});
