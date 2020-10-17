import React from 'react';

import {View, Text} from 'react-native';
import theme from '../../theme';

export default function MainEntrance() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white.main,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Entrou</Text>
    </View>
  );
}
