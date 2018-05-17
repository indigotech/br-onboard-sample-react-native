import React from 'react';

import { View } from 'react-native';
import { Button as NachoButton } from 'nachos-ui';

export function Button(props) {
  return (
    <View style={{ height: 50 }}>
      <NachoButton {...props}/>
    </View>
  );
}
