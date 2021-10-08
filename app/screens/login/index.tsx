import * as React from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleSignup = () => {};

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const toggleTextVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <View style={styles.imageContainer}>
        <Header navigation={navigation} />
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={img.authentication}
        />
      </View>

      <View style={styles.loginContainer}>
        <_Text weight="medium" style={styles.welcomeTxt}>
          {strings.welcomeback}
        </_Text>
        <Input placeholder="example@gmail.com" />
        <Input
          secureTextEntry
          placeholder="Enter a password"
          secureTextVisible={passwordVisible}
          toggleTextVisibility={toggleTextVisibility}
        />
      </View>

      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <TouchableOpacity onPress={handleLogin}>
          <_Text weight="medium" style={styles.forgotPassword}>
            {strings.forgotPassword}
          </_Text>
        </TouchableOpacity>
        <Button onPress={handleSignup} title={strings.logIn} />
      </View>
    </>
  );
};

export default Login;
