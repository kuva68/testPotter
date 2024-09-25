import React, {useState, useEffect} from 'react';
import {StyleSheet, Keyboard, View} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// import Animated, {BounceInDown, BounceOutDown} from 'react-native-reanimated';
import {TabButton} from './TanButton';
import {scaledY} from '../../../utils/scaleSize';

export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const [display, setDisplay] = useState<'flex' | 'none'>('flex');
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      if (focusedOptions?.tabBarHideOnKeyboard) {
        setDisplay('none');
      }
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      if (focusedOptions?.tabBarHideOnKeyboard) setDisplay('flex');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [focusedOptions?.tabBarHideOnKeyboard]);
  //@ts-ignore
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.container, {display: display}]}>
      <View style={styles.buttonsView}>
        {state.routes.map((route, index: number) => {
          return (
            <TabButton
              index={index}
              navigation={navigation}
              route={route}
              state={state}
              key={index + ''}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    alignSelf: 'center',
    width: '100%',
    height: scaledY(60),
    borderTopColor: '#E5E5E5',
    borderTopWidth: 2,
    backgroundColor: '#ffffff',
  },

  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 100,
    width: '100%',
    alignItems: 'center',
    height: '100%',
  },
});
