import * as React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import {validateEmail} from '../../lib/formatHelper';
import {State} from '../../store/reducers';
import {useSelector} from 'react-redux';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  const {userAccount} = useSelector((state: State) => state.account);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
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

  const checkCredentials = () => {
    let emailResult = userAccount.filter((obj: any) => {
      return obj.email == email.toLowerCase();
    });
    let correctInput = emailResult.some(
      (x: any) => x.password === password && x.email == email.toLowerCase(),
    );
    handleLogin(correctInput);
  };

  const handleLogin = (result: boolean) => {
    if (result) {
      navigation.navigate('SuccessScreen');
    } else {
      Alert.alert('Error', 'Wrong email or password');
    }
  };

  const toggleTextVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <ScrollView style={{flex: 1}}>
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
          testID="email"
          value={email}
          placeholder="example@gmail.com"
          onChangeText={(txt: string) => setEmail(txt)}
        />
        <Input
          testID="password"
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
          testID="loginBtn"
          disabled={disableBtn}
          onPress={checkCredentials}
          title={strings.logIn}
        />
      </View>
    </ScrollView>
  );
};

export default Login;
