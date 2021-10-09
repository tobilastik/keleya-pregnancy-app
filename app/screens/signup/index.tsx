import * as React from 'react';
import {View, ImageBackground} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import CheckBox from '../../components/Checkbox';
import {validateEmail} from '../../lib/formatHelper';
import {useSelector, useDispatch} from 'react-redux';
import {State} from '../../store/reducers';
import {userAction} from '../../store/actions';

interface SignupProps {
  navigation: any;
}

const Signup = ({navigation}: SignupProps) => {
  const dispactch = useDispatch();
  const {userAccount} = useSelector((state: State) => state.account);

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [disableBtn, setDisableBtn] = React.useState(true);
  const [acceptPolicy, setAcceptPolicy] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('rajio@gmail.com');

  React.useEffect(() => {
    validateInputs();
  }, [email, password, acceptTerms, acceptPolicy]);

  const validateInputs = () => {
    if (
      validateEmail(email) &&
      password.length > 2 &&
      acceptPolicy &&
      acceptTerms
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleSignup = () => {
    dispactch(userAction.setUserAccount([{email, password}]));
    navigation.navigate('NameScreen');
  };

  const toggleTextVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePolicy = () => {
    setAcceptPolicy(!acceptPolicy);
  };

  const handleTerms = () => {
    setAcceptTerms(!acceptTerms);
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
          {strings.titleAccountDetails}
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
        <View style={{padding: 20}}>
          <CheckBox
            checked={acceptPolicy}
            onPress={handlePolicy}
            text={strings.readPolicyText}
          />
          <CheckBox
            checked={acceptTerms}
            onPress={handleTerms}
            text={strings.acceptTermsText}
          />
        </View>
      </View>

      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <Button
          disabled={disableBtn}
          onPress={handleSignup}
          title={strings.createAccount}
        />
      </View>
    </>
  );
};

export default Signup;
