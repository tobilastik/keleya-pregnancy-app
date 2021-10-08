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
import EvilIcons from 'react-native-vector-icons/EvilIcons';

interface SuccessScreenProps {
  navigation: any;
}

const SuccessScreen = (props: SuccessScreenProps) => {
  return (
    <ImageBackground style={styles.imgBg} source={img.notificationBg}>
      <SafeAreaView style={styles.container}>
        <EvilIcons name="bell" size={55} color="black" />
        <_Text style={styles.notificationTxt}>{strings.successTitle}</_Text>
      </SafeAreaView>
      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <TouchableOpacity onPress={() => {}}>
          <_Text weight="medium" style={styles.skipTxt}>
            {strings.skip}
          </_Text>
        </TouchableOpacity>
        <Button onPress={() => {}} title={strings.allowNotifications} />
      </View>
    </ImageBackground>
  );
};

export default SuccessScreen;
