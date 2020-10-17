import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import theme from '../../theme';

export default function Input(props) {
  return (
    <TextInput
      {...props}
      style={styles.inputStyle}
      secureTextEntry={props.passwordType}
    />
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 65,
    padding: 15,
    fontSize: 18,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    letterSpacing: 1,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: theme.colors.orange[80],
    borderLeftColor: theme.colors.orange[80],
    borderRightColor: theme.colors.orange[80],
    borderBottomColor: theme.colors.orange[80],
  },
});
