import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Icons} from '../../../constants/icons';
import {scaledSize} from '../../../utils/scaleSize';
import {Text} from '../../../components/Text';
import {palette} from '../../../theme/themes';

type Props = {
  index: number;
  navigation: any;
  state: any;
  route: any;
};

export const TabButton = ({index, navigation, state, route}: Props) => {
  const isFocused = state.index === index;
  const getIcon = () => {
    switch (index) {
      case 0:
        return (
          <Icons.Home
            height={scaledSize(24)}
            width={scaledSize(24)}
            fill={isFocused ? '#000000' : '#ADADAD'}
          />
        );
      case 1:
        return (
          <Icons.List
            height={scaledSize(24)}
            width={scaledSize(24)}
            fill={isFocused ? '#000000' : '#ADADAD'}
          />
        );

      default:
        return (
          <Icons.List
            height={scaledSize(24)}
            width={scaledSize(24)}
            fill={isFocused ? '#000000' : '#ADADAD'}
          />
        );
    }
  };

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.btn}
        key={'' + index}>
        {getIcon()}
        <Text style={[styles.text, !isFocused && styles.blurText]}>
          {index === 0 ? 'Home' : 'List'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {},
  text: {
    fontSize: scaledSize(10),
    lineHeight: scaledSize(14),
    color: '#000000',
    textAlign: 'center',
  },
  blurText: {color: palette.secondaryText},
});
