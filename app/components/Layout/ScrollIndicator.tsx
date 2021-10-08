import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {styles} from './styles';

interface Props {
  data: number[];
  scrollX: any;
  width: number;
}

const ScrollIndicator = ({data, scrollX, width}: Props) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const doWidth = scrollX.interpolate({
          inputRange,
          outputRange: [20, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.indicator, {width: doWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default ScrollIndicator;
