import React, {useCallback, useEffect, useMemo} from 'react';
import {View, StyleSheet, RefreshControl, ScrollView} from 'react-native';
import {scaledSize, scaledY} from '../../utils/scaleSize';
import MainLayout from '../../components/MainLayout';
import HeaderBack from '../../components/HeaderBack';
import {ScoreTable} from '../../components/ScoreTable';
import {useAppStore} from '../../store/appStore';
import {useAppSettingsStore} from '../../store/appSettingsStore';
import {Text} from '../../components/Text';

import {BottomTable} from './components/BottomTable';
import {House} from '../../types/types';
import {Icons} from '../../constants/icons';
import FastImage from 'react-native-fast-image';

const HomeScreen: React.FC = () => {
  const {characters, currentCharacter, loading} = useAppStore();

  const {failures, successList} = useAppSettingsStore();
  const onRefresh = useCallback(() => {
    if (characters.length) {
      const current =
        characters[Math.round(Math.random() * (characters.length - 1))];
      useAppStore.setState({currentCharacter: current});
    }
  }, [characters]);
  const failedTries = useMemo(
    () => Object.values(failures).reduce((acc, el) => acc + el, 0),
    [failures],
  );
  const successTries = useMemo(
    () => Object.values(successList).reduce((acc, el) => acc + el, 0),
    [successList],
  );
  useEffect(() => {
    onRefresh();
  }, [onRefresh]);
  return (
    <MainLayout isDisable>
      <HeaderBack title="Home screen" isResetBtn />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }>
        <ScoreTable failed={failedTries} success={successTries} />

        <View style={styles.circle}>
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
          <Text preset="title" style={styles.title}>
            {currentCharacter?.name ?? ''}
          </Text>
        </View>
        <BottomTable
          charecterId={currentCharacter?.id ?? ''}
          onRefresh={onRefresh}
          currentCharacterHouse={(currentCharacter?.house ?? '') as House}
        />
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaledY(24),
  },
  image: {
    width: scaledSize(130),
    height: scaledSize(170),
    backgroundColor: '#e9e9e9',
  },
  circle: {
    width: '100%',
    alignItems: 'center',
    gap: scaledY(16),
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
    gap: scaledY(16),
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

export default HomeScreen;
