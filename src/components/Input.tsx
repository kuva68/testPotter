import React from 'react';
import {
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageBackground,
} from 'react-native';
import {scaledSize} from '../utils/scaleSize';
import {Icons} from '../constants/icons';

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  [key: string]: any;
  style?: StyleProp<ViewStyle>;
}

const Input: React.FC<InputProps> = ({value, setValue, style, ...props}) => {
  return (
    <ImageBackground
      source={Icons.SearchBar}
      style={styles.container}
      resizeMode="stretch">
      <TextInput
        placeholder="Filter characters..."
        style={[styles.input, style]}
        value={value}
        onChangeText={setValue}
        placeholderTextColor="#7B7B7B"
        {...props}
      />
    </ImageBackground>
  );
};

export default Input;
const styles = StyleSheet.create({
  container: {
    width: scaledSize(343),
    height: scaledSize(56),
    gap: scaledSize(8),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scaledSize(16),
  },
  input: {
    padding: 8,
    fontSize: 14,
    height: scaledSize(48),
    color: '#363636',
    flex: 1,
  },
  search: {},
});
