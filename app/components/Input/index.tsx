import * as React from 'react';
import {
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Flex from '../Layout/Flex';
import {GREYISH_BROWN, WARM_GREY} from '../../constants/colors';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  toggleTextVisibility?: () => void;
  secureTextVisible?: boolean;
  centeredText?: boolean;
  value: string;
  onChangeText: any;
  testID: string;
}

const Input = ({
  placeholder,
  secureTextEntry,
  toggleTextVisibility,
  secureTextVisible,
  centeredText,
  value,
  onChangeText,
  testID,
}: InputProps) => {
  const renderRightIcon = () => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity
          onPress={toggleTextVisibility}
          style={styles.secureTextIcon}>
          {secureTextVisible ? (
            <Ionicons name="eye-off" size={24} color="black" />
          ) : (
            <Ionicons name="eye" size={24} color="black" />
          )}
        </TouchableOpacity>
      );
    }
  };

  return (
    <Flex justify="space-between" style={styles.textInput}>
      <TextInput
        style={{
          flex: 1,
          fontSize: 20,
          textAlign: centeredText ? 'center' : 'auto',
        }}
        placeholder={placeholder}
        placeholderTextColor={WARM_GREY}
        secureTextEntry={secureTextEntry ? !secureTextVisible : false}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        testID={testID}
      />
      {renderRightIcon()}
    </Flex>
  );
};

export default Input;
