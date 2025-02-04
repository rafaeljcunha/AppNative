import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../theme/index';
import logo from '../../assets/images/logo.png';
import login from '../../assets/images/login.png';
import Input from '../../components/Input/index';
import Button from '../../components/Button';
import stylesData from './styles';

export default function Login({navigation}) {
  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white.main}
      />
      <SafeAreaView>
        <ScrollView style={styles.scrollview}>
          <View style={styles.generalContainer}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logoImage} />
              <Text style={styles.logoText}>Organizei</Text>
            </View>
            <View style={styles.loginImageContainer}>
              <Image source={login} style={styles.loginImage} />
            </View>
            <View style={styles.actionsContainer}>
              <Input
                placeholder="E-mail de usuário"
                placeholderTextColor={theme.colors.grey[95]}
              />
              <Input
                placeholder="Senha"
                placeholderTextColor={theme.colors.grey[95]}
                passwordType
              />
              <Button textStyle={styles.forgotText} title="Esqueceu a senha?" />
              <Button
                style={styles.button}
                title="Comece a organizar"
                textStyle={styles.textStyle}
                onClick={() => navigation.navigate('LoadingLogin')}
                opacity={0.1}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({...stylesData});
