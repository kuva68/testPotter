import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {scaledSize} from '../../../utils/scaleSize';
import {Text} from '../../../components/Text';
import {Icons} from '../../../constants/icons';
import FastImage from 'react-native-fast-image';

interface CardProps {
  name: string;
  imgUrl: string;
  attempts: number;
  isSuccess: boolean;
  onRefreshPress: (id: string) => void;
  id: string;
  onPress: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  name,
  imgUrl,
  attempts,
  isSuccess,
  id,
  onRefreshPress,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <View style={styles.header}>
        <FastImage source={{uri: imgUrl}} style={styles.image} />
        <View style={styles.topRight}>
          <Text style={styles.title}>{name}</Text>
          <Text preset="secondary" style={styles.title}>
            {`Attempts: ${attempts}`}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        {!isSuccess && (
          <TouchableOpacity onPress={() => onRefreshPress(id)}>
            <Icons.AuthoRenew
              height={scaledSize(28)}
              width={scaledSize(28)}
              fill="#000000"
            />
          </TouchableOpacity>
        )}
        {isSuccess ? (
          <Icons.CheckCircle
            height={scaledSize(30)}
            width={scaledSize(30)}
            fill="green"
          />
        ) : (
          <Icons.CloseCircle
            height={scaledSize(30)}
            width={scaledSize(30)}
            fill={'red'}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: scaledSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  topRight: {
    gap: 8,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledSize(10),
  },
  image: {width: scaledSize(35), height: scaledSize(50)},
  title: {
    fontWeight: '600',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: scaledSize(10),
  },
});

export default Card;
