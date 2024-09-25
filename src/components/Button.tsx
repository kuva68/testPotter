import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {scaledSize} from '../utils/scaleSize';

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  disabled,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabled, style]}>
      <Text style={[styles.text, disabled && styles.disabledText, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    height: scaledSize(48),
    justifyContent: 'center',
    width: '100%',
  },
  disabled: {
    backgroundColor: '#e9e9e9',
  },
  text: {
    color: '#fff',
    fontSize: scaledSize(14),
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#ADADAD',
  },
});

export default Button;
