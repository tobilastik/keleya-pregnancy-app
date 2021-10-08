import * as React from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';

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
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={img.authentication}>
        <Header navigation={navigation} />
      </ImageBackground>

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
      </View>

      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <Button onPress={handleSignup} title={strings.createAccount} />
      </View>
    </>
  );
};

export default Signup;
