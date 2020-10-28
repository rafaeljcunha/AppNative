/* eslint-disable react-native/no-inline-styles */
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import logo from '../../assets/images/logo.png';
import homemCelular from '../../assets/images/homem_celular_escuro.png';
import engrenagem from '../../assets/images/engrenagem_carregando.png';
import engrenagemCelular from '../../assets/images/engrenagem_celular.png';
import checkedImage from '../../assets/images/checked.png';
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

const contentProgressBar = ({count, widthProgress}) => ({
  height: 8,
  borderRadius: 10,
  width: widthProgress,
  backgroundColor: theme.colors.orange.main,
  borderRightWidth: count < 90 && count > 0 ? 2 : 0,
  borderTopRightRadius: count < 90 && count > 0 ? 0 : 10,
  borderBottomEndRadius: count < 90 && count > 0 ? 0 : 10,
  borderRightColor:
    count < 90 && count > 0 ? theme.colors.black.main : 'transparent',
});

const waitingEngrenagem = ({spinInterpolate}) => ({
  ...styles.waitingImagem,
  transform: [{rotate: spinInterpolate}],
});

const waitingEngrenagemCelular = ({spinInterpolate}) => ({
  ...styles.engrenagemCelularImage,
  transform: [{rotate: spinInterpolate}],
});

export default function LoadingRegister({navigation}) {
  const [widthProgress, setWidthProgress] = useState(0);
  const [count, setCount] = useState(0);
  const spinValue = useMemo(() => new Animated.Value(0), []);
  const opacityImage = useMemo(() => new Animated.Value(0), []);

  const onLoad = () => {
    Animated.timing(opacityImage, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

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

  useEffect(() => {
    if (count <= 90) {
      setInterval(() => {
        setCount((prev) => prev + 10);
      }, 800);
      setWidthProgress(count);
    } else {
      return () => null;
    }
  }, [count]);

  useEffect(() => {
    if (count === 90) {
      setTimeout(() => {
        navigation.navigate('MainEntrance');
      }, 2000);
    }
  }, [count, navigation]);

  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const opacityInterpolate = opacityImage.interpolate({
    inputRange: [0, 1],
    outputRange: [0.85, 1],
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
            {count < 90 ? (
              <Animated.Image
                fadeDuration={3000}
                source={engrenagemCelular}
                style={
                  count < 90
                    ? waitingEngrenagemCelular({spinInterpolate})
                    : styles.engrenagemCelularImage
                }
              />
            ) : (
              <Animated.Image
                onLoad={onLoad}
                source={checkedImage}
                style={{
                  ...styles.engrenagemCelularImage,
                  opacity: opacityImage,
                  transform: [{scale: opacityInterpolate}],
                }}
              />
            )}
            {count < 90 ? (
              <Text style={styles.waitingMobileText}>Aguarde...</Text>
            ) : (
              <Text style={styles.waitingMobileText}>Carregado</Text>
            )}
            <View style={styles.progressBar}>
              <View style={contentProgressBar({count, widthProgress})} />
            </View>
          </View>
          <View style={styles.waitingContainer}>
            {count < 90 ? (
              <Fragment>
                <Text style={styles.waitingText}>Carregando dados</Text>
                <Animated.Image
                  style={
                    count < 90
                      ? waitingEngrenagem({spinInterpolate})
                      : styles.waitingImagem
                  }
                  source={engrenagem}
                />
              </Fragment>
            ) : (
              <Text style={styles.waitingText}>Carregado com sucesso</Text>
            )}
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
  waitingMobileText: {
    color: 'white',
    zIndex: 1,
    fontSize: theme.text.width[12],
    position: 'absolute',
    top: 15,
  },
  progressBar: {
    width: 90,
    height: 8,
    backgroundColor: 'white',
    position: 'absolute',
    top: 40,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
