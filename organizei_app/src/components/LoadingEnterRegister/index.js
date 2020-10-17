import React, {Fragment, useCallback, useEffect, useMemo} from 'react';

import logo from '../../assets/images/logo.png';
import homemCelular from '../../assets/images/homem_celular_escuro.png';
import engrenagem from '../../assets/images/engrenagem_carregando.png';
import engrenagemCelular from '../../assets/images/engrenagem_celular.png';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';
import theme from '../../theme';
// import LinearGradient from 'react-native-linear-gradient';

export default function LoadingRegister() {
  const spinValue = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    spinValue;
  });

  const spin = useCallback(() => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  }, [spinValue]);

  useEffect(() => {
    spin();
  }, [spin]);

  const spinInter = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Fragment>
      <StatusBar
        backgroundColor={theme.colors.white.main}
        barStyle="light-content"
      />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logoImage} />
            <Text style={styles.logoText}>Organizei</Text>
          </View>
          <Image
            source={homemCelular}
            style={styles.manMobile}
            resizeMode="contain"
          />
          <View style={styles.celularContainer}>
            <Animated.Image
              source={engrenagemCelular}
              style={{
                ...styles.engrenagemCelularImage,
                transform: [{rotate: spinInter}],
              }}
            />
            <Text
              style={{
                color: 'white',
                zIndex: 1,
                fontSize: theme.text.width[12],
                position: 'absolute',
                top: 15,
              }}>
              Aguarde...
            </Text>
          </View>
          <View style={styles.waitingContainer}>
            <Text style={styles.waitingText}>Carregando dados</Text>
            <Animated.Image
              style={{
                ...styles.waitingImagem,
                transform: [{rotate: spinInter}],
              }}
              source={engrenagem}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.colors.white.main,
    minHeight: '100%',
    flexDirection: 'column',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.white.main,
  },
  logoImage: {width: 34, height: 34, marginRight: 10},
  logoText: {
    fontSize: theme.text.width[22],
    fontWeight: theme.text.fontWeight.bold,
    letterSpacing: 1,
  },
  manMobile: {width: 300},
  waitingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.white.main,
    marginBottom: '10%',
    zIndex: 0,
  },
  waitingText: {
    fontWeight: theme.text.fontWeight[600],
    fontSize: theme.text.width[20],
    marginRight: 8,
  },
  waitingImagem: {width: 30, height: 30},
  celularContainer: {
    width: 60,
    height: 60,
    position: 'absolute',
    borderRightWidth: 60,
    borderTopWidth: 60,
    borderRightColor: theme.colors.orange.main,
    borderTopColor: theme.colors.orange[75],
    bottom: '53.5%',
    right: '24.5%',
    zIndex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  engrenagemCelularImage: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
});
