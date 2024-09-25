import React, {useCallback, useMemo, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {scaledSize, scaledY} from '../../utils/scaleSize';
import MainLayout from '../../components/MainLayout';
import HeaderBack from '../../components/HeaderBack';
import {ScoreTable} from '../../components/ScoreTable';
import {useAppStore} from '../../store/appStore';
import Card from './components/Card';
import {useAppSettingsStore} from '../../store/appSettingsStore';
import Input from '../../components/Input';
import {useNavigation} from '@react-navigation/native';
import {EnScreens} from '../../types/enums';

export type VoteType = 'active' | 'inactive' | 'magistrates' | 'survey';

const ListScreen: React.FC = () => {
  const characters = useAppStore(state => state.characters);
  const {failures, successList} = useAppSettingsStore();
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation();
  const failedTries = useMemo(
    () => Object.values(failures).reduce((acc, el) => acc + el, 0),
    [failures],
  );
  const successTries = useMemo(
    () => Object.values(successList).reduce((acc, el) => acc + el, 0),
    [successList],
  );
  const dataToShow = useMemo(() => {
    if (search.length > 0) {
      return characters.filter(item =>
        item.name
          .toLowerCase()
          .split(' ')
          .some(el => el.startsWith(search.toLowerCase())),
      );
    }
    return characters;
  }, [search, characters]);
  const onRefreshPress = useCallback(
    (id: string) => {
      const current = characters.find(el => el.id === id);
      if (current) {
        useAppStore.setState({currentCharacter: current});
        navigation.navigate(EnScreens.HOME);
      }
    },
    [characters, navigation],
  );
  const onPress = useCallback(
    (id: string) => {
      const current = characters.find(el => el.id === id);
      if (current) {
        useAppStore.setState({currentCharacter: current});
        navigation.navigate(EnScreens.CHARACTER_SCREEN);
      }
    },
    [characters, navigation],
  );
  return (
    <MainLayout isDisable={false}>
      <View style={styles.container}>
        <HeaderBack title="List screen" isResetBtn />
        <ScoreTable failed={failedTries} success={successTries} />
        <Input value={search} setValue={setSearch} />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          style={styles.flatList}
          data={dataToShow}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card
              onPress={onPress}
              onRefreshPress={onRefreshPress}
              name={item.name}
              imgUrl={item.image}
              id={item.id}
              isSuccess={item.id in successList}
              attempts={(failures[item.id] ?? 0) + (successList[item.id] ?? 0)}
            />
          )}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaledY(24),
    paddingHorizontal: scaledSize(16),
    backgroundColor: '#f5f5f5',
    gap: scaledY(24),
  },
  circle: {
    width: scaledSize(8),
    height: scaledSize(8),
    borderRadius: scaledSize(16),
    backgroundColor: '#000000',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  topContainer: {
    paddingHorizontal: scaledSize(16),
    gap: scaledY(24),
  },
  flatListContainer: {
    width: scaledSize(750),
  },
  content: {
    gap: scaledY(24),
    width: '100%',
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

export default ListScreen;
