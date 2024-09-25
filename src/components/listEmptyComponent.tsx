import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {theme} from '../theme/themes';
export const ListEmptyComponent = ({loading}: {loading: boolean}) => {
  return (
    <View style={styles.main}>
      {loading && (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
