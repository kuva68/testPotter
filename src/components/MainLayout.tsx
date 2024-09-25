import React, {ReactNode} from 'react';
import {Keyboard, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const MainLayout = ({
  children,
  isDisable,
}: {
  children: ReactNode;
  isDisable: boolean;
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      disabled={isDisable}
      style={styles.main}>
      <SafeAreaView edges={['top']} style={styles.container}>
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default MainLayout;
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffffff'},
  container: {
    flex: 1,
  },
});
