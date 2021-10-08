import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {GREYISH_BROWN, PALE_TEAL} from '../../constants/colors';
import _Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CheckBoxProps {
  checked: boolean;
  text: string;
  onPress: () => void;
}

const CheckBox = ({checked, text, onPress}: CheckBoxProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.circle} onPress={onPress}>
          {checked && <Icon name="check-bold" size={20} color={PALE_TEAL} />}
        </TouchableOpacity>
        <_Text style={styles.checkboxText} weight="medium">
          {text}
        </_Text>
      </View>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 30,
    marginVertical: 8,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#539eff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#539eff',
  },
  checkboxText: {
    marginLeft: 8,
    color: GREYISH_BROWN,
  },
});
