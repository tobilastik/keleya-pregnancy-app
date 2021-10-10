import * as React from 'react';
import {View, ImageBackground} from 'react-native';
import _Text from '../../components/Text';
import {strings} from '../../locales';
import {styles} from './styles';
import img from '../../constants/images';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {WHITE} from '../../constants/colors';
import DatePicker from 'react-native-date-picker';
import DateComponent from '../../components/Date';
import moment from 'moment';

interface DateScreenProps {
  navigation: any;
  route: any;
}

const DateScreen = ({navigation, route}: DateScreenProps) => {
  const {name} = route.params;
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [datePicked, setDatePicked] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState('Select date');
  const [disableBtn, setDisableBtn] = React.useState(true);

  React.useEffect(() => {
    handleDate();
  }, [datePicked]);

  const handleDate = () => {
    if (datePicked) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleContinue = () => {
    navigation.navigate('WorkoutScreen');
  };

  let maxDate = new Date(moment().add(9, 'months').toDate());

  return (
    <View testID="dateScreen" style={{backgroundColor: WHITE, flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={img.dueDate}>
        <Header navigation={navigation} />
      </ImageBackground>

      <View style={styles.loginContainer}>
        <_Text style={styles.welcomeTxt}>
          {strings.dateScreenTitle}
          {name}?
        </_Text>
        <DateComponent
          testID="datePickerBtn"
          datePicked={datePicked}
          date={datePicked ? date : placeholder}
          onPress={() => setOpen(true)}
        />
        <DatePicker
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDatePicked(true);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          onDateChange={() => {}}
          modal
          minimumDate={new Date()}
          maximumDate={maxDate}
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

export default DateScreen;
