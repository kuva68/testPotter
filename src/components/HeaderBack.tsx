import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from './Text';
import {useNavigation} from '@react-navigation/native';
import {scaledSize, scaledY} from '../utils/scaleSize';
import {Icons} from '../constants/icons';
import {useAppSettingsStore} from '../store/appSettingsStore';

interface HeaderBackProps {
  title: string;
  backAction?: boolean;
  isResetBtn?: boolean;
}

const HeaderBack: React.FC<HeaderBackProps> = ({
  title,
  backAction = false,
  isResetBtn = false,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (backAction) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {!!backAction ? (
        <TouchableOpacity
          disabled={!backAction}
          onPress={handleBackPress}
          style={styles.backButton}>
          <Icons.ShevoronLeft width={28} height={28} fill="#000000" />
        </TouchableOpacity>
      ) : (
        <View style={styles.empty} />
      )}
      <Text preset="title" style={styles.title}>
        {title}
      </Text>
      {isResetBtn ? (
        <Text
          onPress={() => {
            useAppSettingsStore.setState({successList: {}, failures: {}});
          }}
          preset="secondary"
          style={styles.resetText}>
          Reset
        </Text>
      ) : (
        <View style={styles.empty} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaledSize(16),
    marginTop: scaledY(16),
    justifyContent: 'space-between',
    borderBlockColor: '#00000010',
    borderBottomWidth: 1,
  },
  backButton: {
    justifyContent: 'center',
    left: -10,
    width: scaledSize(40),
    height: scaledSize(40),
  },
  title: {
    textAlign: 'center',
  },
  empty: {
    width: scaledSize(40),
    height: scaledSize(40),
  },
  resetText: {width: scaledSize(40), fontSize: scaledSize(14)},
});

export default HeaderBack;
