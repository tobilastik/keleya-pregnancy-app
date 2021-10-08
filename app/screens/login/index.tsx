import * as React from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import {validateEmail} from '../../lib/formatHelper';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('rajio@gmail.com');
  const [disableBtn, setDisableBtn] = React.useState(true);

  React.useEffect(() => {
    validateInputs();
  }, [email, password]);

  const validateInputs = () => {
    if (validateEmail(email) && password.length > 2) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleLogin = () => {
    navigation.navigate('SuccessScreen');
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
        <Input
          value={email}
          placeholder="example@gmail.com"
          onChangeText={(txt: string) => setEmail(txt)}
        />
        <Input
          value={password}
          onChangeText={(txt: string) => setPassword(txt)}
          secureTextEntry
          placeholder="Enter a password"
          secureTextVisible={passwordVisible}
          toggleTextVisibility={toggleTextVisibility}
        />
      </View>

      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <TouchableOpacity onPress={() => {}}>
          <_Text weight="medium" style={styles.forgotPassword}>
            {strings.forgotPassword}
          </_Text>
        </TouchableOpacity>
        <Button
          disabled={disableBtn}
          onPress={handleLogin}
          title={strings.logIn}
        />
      </View>
    </>
  );
};

export default Login;
