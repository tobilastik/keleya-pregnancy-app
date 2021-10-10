import * as React from 'react';
import {View, ImageBackground} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import ScrollPicker from '../../components/ScrollPicker';
import Header from '../../components/Header';
import {WHITE} from '../../constants/colors';
import Button from '../../components/Button';

interface WorkoutScreenProps {
  navigation: any;
}

const WorkoutScreen = ({navigation}: WorkoutScreenProps) => {
  const handleContinue = () => {
    navigation.navigate('SuccessScreen');
  };

  return (
    <View testID="workoutScreen" style={{backgroundColor: WHITE, flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={img.workout}>
        <Header navigation={navigation} />
        <_Text style={styles.welcomeTxt}>{strings.activityWorkoutTitle}</_Text>
      </ImageBackground>
      <ScrollPicker />
      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <Button
          testID="continueBtn"
          onPress={handleContinue}
          title={strings.continue}
        />
      </View>
    </View>
  );
};

export default WorkoutScreen;
