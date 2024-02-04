import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

import Routes from './navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <Routes />
    </SafeAreaView>
  );
}

export default App;

// run sdk use java 17.0.10-amzn
