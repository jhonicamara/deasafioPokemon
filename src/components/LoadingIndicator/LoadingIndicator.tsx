import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './LoadingIndicator.style';

const LoadingIndicator: React.FC = () => (
  <View style={styles.screenContainer}>
    <ActivityIndicator size={'large'} color="#D30A40" />
  </View>
);

export default LoadingIndicator;
