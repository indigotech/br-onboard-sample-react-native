import React from 'react';

import { View } from 'react-native';

export function CenteredView({ children, ...props }) {
  return (
    <View {...props} style={style}>
      {children}
    </View>
  );
}

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'stretch',
};
