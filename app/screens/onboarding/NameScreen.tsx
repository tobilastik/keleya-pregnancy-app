import * as React from 'react';
import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';

interface NameScreenProps {
  navigation: any;
}

const NameScreen = ({navigation}: NameScreenProps) => {
  const handleContinue = () => {
    navigation.navigate('DateScreen');
  };

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={img.couchSmile}>
        <Header navigation={navigation} />
      </ImageBackground>

      <View style={styles.loginContainer}>
        <_Text style={styles.welcomeTxt}>{strings.welcomeText}</_Text>
        <Input centeredText placeholder="Your name" />
      </View>

      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <Button onPress={handleContinue} title={strings.continue} />
      </View>
    </>
  );
};

export default NameScreen;
