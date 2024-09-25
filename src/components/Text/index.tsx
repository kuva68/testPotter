import React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {darkStyle} from './text.presets';
import {ITextProps} from './text.props';

export const Text: React.FC<ITextProps> = ({style, preset, ...rest}) => {
  const styles = [darkStyle[preset || 'default'], style];

  return <ReactNativeText {...rest} style={styles} allowFontScaling={false} />;
};
