import React from 'react';
import {View} from 'react-native';

interface FlexProps {
  children: any;
  direction?: any;
  align?: any;
  justify?: any;
  flex?: any;
  style?: any;
}

//custom component for major views
const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  align = 'center',
  justify,
  flex = 0,
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flex,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Flex;
