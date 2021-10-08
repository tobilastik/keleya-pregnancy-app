import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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
}

const Input = ({
  placeholder,
  secureTextEntry,
  toggleTextVisibility,
  secureTextVisible,
  centeredText,
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
      />
      {renderRightIcon()}
    </Flex>
  );
};

export default Input;
