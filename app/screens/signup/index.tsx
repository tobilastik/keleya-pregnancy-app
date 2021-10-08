import * as React from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import CheckBox from '../../components/Checkbox';

interface SignupProps {
  navigation: any;
}

const Signup = ({navigation}: SignupProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleSignup = () => {
    navigation.navigate('NameScreen');
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
          {strings.titleAccountDetails}
        </_Text>
        <Input placeholder="example@gmail.com" />
        <Input
          secureTextEntry
          placeholder="Enter a password"
          secureTextVisible={passwordVisible}
          toggleTextVisibility={toggleTextVisibility}
        />
        <View style={{padding: 20}}>
          <CheckBox checked text={strings.readPolicyText} />
          <CheckBox text={strings.acceptTermsText} />
        </View>
      </View>

      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <Button onPress={handleSignup} title={strings.createAccount} />
      </View>
    </>
  );
};

export default Signup;
