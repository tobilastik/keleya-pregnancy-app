import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ACTIVE_TIME} from './data';
import {strings} from '../../locales';

interface ScrollPickerProps {}

const ScrollPicker = (props: ScrollPickerProps) => {
  const [selectedItem, setSelectedItem] = React.useState(3);
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}>
        {ACTIVE_TIME.map((item: any, index: number) => {
          if (item.key == 1) {
            return (
              <Picker.Item
                key={item.key}
                label={strings.onceWeek}
                value={item.key}
              />
            );
          } else
            return (
              <Picker.Item
                key={item.key}
                label={`${item.freq} ${strings.weekActive}`}
                value={item.key}
              />
            );
        })}
      </Picker>
    </View>
  );
};

export default ScrollPicker;

const styles = StyleSheet.create({
  container: {},
});
