import * as React from 'react';
import {
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';

interface WelcomeProps {
  navigation: any;
}

const Welcome = ({navigation}: WelcomeProps) => {
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground style={styles.imgBg} source={img.firstIntro}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={img.keleya} />
        <_Text weight="medium" style={styles.welcomeTxt}>
          {strings.welcomeTitle}
        </_Text>
      </SafeAreaView>
      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <Button onPress={handleSignup} title={strings.getStarted} />
        <TouchableOpacity onPress={handleLogin}>
          <_Text weight="medium" style={styles.welcomeTxt}>
            {strings.orLogin}
          </_Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
