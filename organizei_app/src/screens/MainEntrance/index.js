import React, {Fragment} from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import theme from '../../theme';

export default function MainEntrance() {
  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.orange.main}
      />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Entrou</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white.main,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
});
