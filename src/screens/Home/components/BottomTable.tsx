import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {Icons} from '../../../constants/icons';
import {Text} from '../../../components/Text';
import {scaledSize, scaledY} from '../../../utils/scaleSize';
import {House} from '../../../types/types';
import {useAppSettingsStore} from '../../../store/appSettingsStore';
const bottomTableObj = [
  {source: Icons.Grifindor, name: 'Gryfindor', id: 'Gryffindor'},
  {source: Icons.Slytherin, name: 'Slytherin', id: 'Slytherin'},
  {source: Icons.Ruvenclow, name: 'Ravenclaw', id: 'Ravenclaw'},
  {source: Icons.Hulfepul, name: 'Hafflepuff', id: 'Hufflepuff'},
];
export const BottomTable = ({
  currentCharacterHouse,
  onRefresh,
  charecterId,
}: {
  currentCharacterHouse: House;
  onRefresh: () => void;
  charecterId: string;
}) => {
  const checkHouse = (house: House) => {
    if (house === currentCharacterHouse) {
      const successList = useAppSettingsStore.getState().successList;
      const score = successList[charecterId] ?? 0;

      useAppSettingsStore.setState({
        successList: {...successList, [charecterId]: score + 1},
      });
    } else {
      const failures = useAppSettingsStore.getState().failures;
      const score = failures[charecterId] ?? 0;
      failures[charecterId] = (failures[charecterId] ?? 0) + 1;
      useAppSettingsStore.setState({
        failures: {...failures, [charecterId]: score + 1},
      });
    }

    onRefresh();
  };
  return (
    <View style={styles.main}>
      {bottomTableObj.map(el => (
        <TouchableOpacity
          key={el.name}
          onPress={() => checkHouse(el.id as House)}>
          <ImageBackground
            resizeMode="stretch"
            source={Icons.BigRect}
            style={styles.image}>
            <Image source={el.source} style={styles.img} resizeMode="contain" />
            <Text>{el.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => checkHouse('' as House)}>
        <ImageBackground
          resizeMode="stretch"
          source={Icons.Rect}
          style={styles.imageLong}>
          <Text>Not in house</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    gap: scaledSize(16),
  },
  img: {
    width: scaledSize(40),
    height: scaledSize(60),
    // marginBottom: scaledY(-10),
    marginVertical: scaledY(-10),
  },
  image: {
    width: scaledSize(160),
    height: scaledSize(100),
    justifyContent: 'center',
    gap: 2,
    alignItems: 'center',
  },
  imageLong: {
    width: scaledSize(343),
    height: scaledSize(60),
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
  },
});
