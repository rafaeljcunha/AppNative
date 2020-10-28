import React, {useCallback, useEffect, useMemo} from 'react';
import {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Easing,
  Animated,
} from 'react-native';
import theme from '../../theme';
import logo from '../../assets/images/logo.png';
import engrenagem from '../../assets/images/engrenagem_carregando.png';
import engrenagemClara from '../../assets/images/engrenagem_2.png';
import celular from '../../assets/images/celular_loading_login.png';
import fundoLoading from '../../assets/images/fundo_login_loading.png';
import homem from '../../assets/images/homem_no_celular.png';
import planta from '../../assets/images/plantas_login.png';

const waitingEngrenagem = ({spinInterpolate, styleName}) => ({
  ...styles[styleName],
  transform: [{rotate: spinInterpolate}],
});

export default function LoadingLogin({navigation}) {
  const spinValue = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    spinValue;
  });

  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const spinRotateInverse = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
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
    setTimeout(() => {
      navigation.navigate('MainEntrance');
    }, 2000);
  }, [spin, navigation]);

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
          <View>
            <Image
              source={fundoLoading}
              style={styles.fundo}
              resizeMode="contain"
            />
            <Animated.Image
              source={engrenagem}
              style={waitingEngrenagem({
                spinInterpolate,
                styleName: 'engrenagem1',
              })}
            />
            <Animated.Image
              source={engrenagemClara}
              style={waitingEngrenagem({
                spinInterpolate,
                styleName: 'engrenagem2',
              })}
            />
            <Animated.Image
              source={engrenagem}
              style={waitingEngrenagem({
                spinInterpolate,
                styleName: 'engrenagem3',
              })}
            />
            <Animated.Image
              source={engrenagem}
              style={waitingEngrenagem({
                spinInterpolate: spinRotateInverse,
                styleName: 'engrenagem4',
              })}
            />
            <Image
              source={homem}
              style={styles.manMobile}
              resizeMode="contain"
            />
            <Image source={planta} style={styles.planta} resizeMode="contain" />
            <Image
              source={celular}
              style={styles.celular}
              resizeMode="contain"
            />
          </View>
          <View style={styles.waitingContainer}>
            <Text style={styles.waitingText}>Carregando dados</Text>
            <Animated.Image
              style={waitingEngrenagem({
                spinInterpolate,
                styleName: 'waitingImagem',
              })}
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
  fundo: {width: 310},
  manMobile: {width: 280, zIndex: 3, position: 'absolute', top: 112, left: 10},
  planta: {width: 300, zIndex: 1, position: 'absolute', top: 111, left: -3},
  celular: {
    width: 132,
    position: 'absolute',
    left: 55,
    top: 20,
    zIndex: 2,
  },
  engrenagem1: {
    position: 'absolute',
    width: 35,
    height: 35,
    top: 190,
    left: 19,
  },
  engrenagem2: {
    position: 'absolute',
    width: 90,
    height: 90,
    top: 118,
    right: 65,
  },
  engrenagem3: {
    position: 'absolute',
    width: 37,
    height: 37,
    top: 120,
    right: 39,
  },
  engrenagem4: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 91,
    right: 50,
    opacity: 0.8,
  },
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
});
