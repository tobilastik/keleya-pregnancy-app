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
  const [disableBtn, setDisableBtn] = React.useState(true);
  const [name, setName] = React.useState('');

  const handleContinue = () => {
    navigation.navigate('DateScreen');
  };

  const handleName = (txt: string) => {
    if (txt.length > 1) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
    setName(txt);
  };

  return (
    <View testID="nameScreen" style={{flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={img.couchSmile}>
        <Header navigation={navigation} />
      </ImageBackground>

      <View style={styles.loginContainer}>
        <_Text style={styles.welcomeTxt}>{strings.welcomeText}</_Text>
        <Input
          testID="name"
          value={name}
          onChangeText={(txt: string) => handleName(txt)}
          centeredText
          placeholder="Your name"
        />
      </View>

      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <Button
          testID="continueBtn"
          disabled={disableBtn}
          onPress={handleContinue}
          title={strings.continue}
        />
      </View>
    </View>
  );
};

export default NameScreen;
