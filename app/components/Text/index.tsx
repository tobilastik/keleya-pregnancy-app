import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {styles} from './styles';

interface TextProps {
  children: any;
  style: any;
  selectable?: boolean;
  numberOfLines?: number;
  weight?: string;
}

const _Text = (props: TextProps) => {
  const handleFontFamily = () => {
    if (props.weight == 'bold') {
      return 'Roboto-Bold';
    } else if (props.weight == 'medium') {
      return 'Roboto-Medium';
    } else {
      return 'Roboto-Regular';
    }
  };
  return (
    <Text
      numberOfLines={props.numberOfLines}
      selectable={props.selectable || false}
      style={[
        styles.textStyle,
        {
          fontFamily: handleFontFamily(),
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default _Text;
