import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';

import theme from '../../theme';
import logo from '../../assets/images/logo.png';
import nuvem from '../../assets/images/nuvem.png';
import Button from '../../components/Button';
import stylesData from './styles';

const Home = ({navigation}) => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor={theme.colors.white.main}
    />
    <SafeAreaView>
      <View style={styles.generalContainer}>
        <View style={styles.containerImage}>
          <Image source={logo} style={styles.logoImage} />
          <Text style={styles.logoText}>Organizei</Text>
          <Text>
            <View style={styles.logoDescriptionDash} />
            <Text style={styles.logoDescription}>
              {' '}
              Clicou e baixou? Organizou!{' '}
            </Text>
            <View style={styles.logoDescriptionDash} />
          </Text>
        </View>
        <View style={styles.containerActions}>
          <Text style={styles.textReady}>Vamos começar?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onClick={() => navigation.navigate('Login')}
            opacity={0.5}
            style={styles.button}
            textStyle={styles.textButton}
            title="Entrar"
          />
          <Button
            onClick={() => navigation.navigate('Register')}
            opacity={0.1}
            style={styles.button}
            textStyle={styles.textButton}
            title="Criar uma nova conta"
          />
        </View>
        <View style={styles.cloudContainer}>
          <Image source={nuvem} style={styles.cloudImage} />
        </View>
      </View>
    </SafeAreaView>
  </Fragment>
);

const styles = StyleSheet.create({...stylesData});

export default Home;
