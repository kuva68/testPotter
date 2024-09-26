import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {scaledSize, scaledY} from '../../utils/scaleSize';
import MainLayout from '../../components/MainLayout';
import HeaderBack from '../../components/HeaderBack';
import {useAppStore} from '../../store/appStore';
import {useAppSettingsStore} from '../../store/appSettingsStore';
import {Icons} from '../../constants/icons';
import TextField from '../../components/TextField';
import FastImage from 'react-native-fast-image';
import {RootStackScreenProps} from '../../navigation/types';
import {EnScreens} from '../../types/enums';

const CharacterScreen: React.FC<
  RootStackScreenProps<EnScreens.CHARACTER_SCREEN>
> = () => {
  const {currentCharacter} = useAppStore();
  const characterData = [
    {title: 'House', value: currentCharacter?.house},
    {title: 'Date of birth', value: currentCharacter?.dateOfBirth},
    {title: 'Actor', value: currentCharacter?.actor},
    {title: 'Species', value: currentCharacter?.species},
  ];
  const {successList} = useAppSettingsStore();
  const isSuccess = currentCharacter?.id && currentCharacter?.id in successList;
  return (
    <MainLayout isDisable>
      <HeaderBack backAction title="Home screen" isResetBtn />
      <View style={styles.container}>
        {currentCharacter?.image ? (
          <FastImage
            source={{uri: currentCharacter?.image}}
            style={styles.image}
          />
        ) : (
          <Icons.Account
            width={scaledSize(130)}
            height={scaledSize(170)}
            fill="#000000"
            style={styles.image}
          />
        )}
        <View style={styles.circle}>
          {isSuccess ? (
            characterData.map(el => (
              <TextField
                key={el.title}
                text={el.value ?? ''}
                title={el.title}
              />
            ))
          ) : (
            <Image
              source={Icons.Denied}
              resizeMode="contain"
              style={styles.deny}
            />
          )}
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaledY(24),
    gap: scaledSize(16),
    paddingHorizontal: scaledSize(16),
    flexDirection: 'row',
  },
  image: {
    width: scaledSize(150),
    height: scaledSize(190),
    backgroundColor: '#e9e9e9',
  },
  deny: {
    width: scaledSize(150),
    height: scaledSize(80),
  },
  circle: {
    gap: scaledY(16),
    overflow: 'hidden',
  },
  topContainer: {
    paddingHorizontal: scaledSize(16),
    gap: scaledY(24),
  },
  flatListContainer: {
    width: scaledSize(750),
  },
  content: {
    paddingHorizontal: scaledSize(16),
    gap: scaledY(24),
    paddingBottom: 100,
  },
  flatListInnerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  switcherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaledY(-4),
  },
  title: {
    color: '#000000',
  },
  flatList: {
    width: scaledSize(375 - 32),
  },
});

export default CharacterScreen;
