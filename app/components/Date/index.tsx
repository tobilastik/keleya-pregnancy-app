import moment from 'moment';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import _Text from '../Text';
import {styles} from './styles';

interface DateComponentProps {
  date: any;
  onPress: () => void;
}

const DateComponent = ({date, onPress}: DateComponentProps) => {
  return (
    <TouchableOpacity style={styles.dateContainer} onPress={onPress}>
      <_Text weight="bold" style={styles.dateTxt}>
        {moment(date).format('MMM DD, YYYY')}
      </_Text>
    </TouchableOpacity>
  );
};

export default DateComponent;
