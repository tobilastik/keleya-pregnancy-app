import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {PALE_TEAL} from '../../constants/colors';
import _Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Flex from '../Layout/Flex';
import {styles} from './styles';

interface CheckBoxProps {
  checked: boolean;
  text: string;
  onPress: () => void;
}

const CheckBox = ({checked, text, onPress}: CheckBoxProps) => {
  return (
    <Flex>
      <Flex style={styles.buttonContainer}>
        <TouchableOpacity style={styles.circle} onPress={onPress}>
          {checked && <Icon name="check-bold" size={20} color={PALE_TEAL} />}
        </TouchableOpacity>
        <_Text style={styles.checkboxText} weight="medium">
          {text}
        </_Text>
      </Flex>
    </Flex>
  );
};

export default CheckBox;
