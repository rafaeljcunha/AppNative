import React, {Fragment} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import theme from '../../theme';
import logoBranco from '../../assets/images/logo_branco.png';
import nuvemBranca from '../../assets/images/nuvem_branca.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import stylesData from './styles';

export default function Register({navigation}) {
  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.orange.main}
      />
      <SafeAreaView>
        <ScrollView style={styles.scrollview}>
          <View style={styles.logoContainer}>
            <Image source={logoBranco} style={styles.logo} />
            <Text style={styles.logoText}>Organizei</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.cloudContainer}>
              <Image source={nuvemBranca} style={styles.cloudImage} />
              <Button
                style={styles.picture}
                icon={
                  <Icon
                    name="camera"
                    size={40}
                    color={theme.colors.orange.main}
                  />
                }
              />
            </View>
            <View style={styles.formData}>
              <Input
                placeholder="Nome de Usuário"
                placeholderTextColor={theme.colors.grey[75]}
              />
              <Input
                placeholder="E-mail de usuário"
                placeholderTextColor={theme.colors.grey[75]}
              />
              <Input
                placeholder="Senha"
                password
                placeholderTextColor={theme.colors.grey[75]}
              />
              <Input
                placeholder="Confirme sua senha"
                password
                placeholderTextColor={theme.colors.grey[75]}
              />
              <Button
                style={styles.button}
                title="Começar a organizar"
                textStyle={styles.textStyle}
                onClick={() => console.log('clicou entrou')}
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
