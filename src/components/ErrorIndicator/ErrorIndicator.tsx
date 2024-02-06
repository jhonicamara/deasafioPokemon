import React from 'react';
import {Text, View} from 'react-native';

import styles from './ErrorIndicator.style';

interface ErrorIndicatorProps {
  message: string;
}

const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({message}) => (
  <View style={styles.screenContainer}>
    <Text>{message}</Text>
  </View>
);

export default ErrorIndicator;
