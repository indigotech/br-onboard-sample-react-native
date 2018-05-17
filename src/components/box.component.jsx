import React from 'react';
import { View } from 'react-native';

export function Box({ children }) {
  return (
    <View style={style} >
      {children}
    </View>
  );
}

const style = {
  alignItems: 'stretch',
  marginHorizontal: 30
}
