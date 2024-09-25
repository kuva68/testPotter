import {useAppStore} from './src/store/appStore';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Loader} from './src/components/Loader';
function App() {
  const isLoading = useAppStore(state => state.loading);
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        {isLoading && <Loader />}

        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        {/* <Text>fFFfffffffffffffff</Text> */}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
