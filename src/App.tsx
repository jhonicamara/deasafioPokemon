import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Routes from './navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#D30A40'} />
      <Routes />
    </SafeAreaView>
  );
}

export default App;

// run sdk use java 17.0.10-amzn
