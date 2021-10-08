import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Flex from '../Layout/Flex';
import Entypo from 'react-native-vector-icons/Entypo';
import _Text from '../Text';

interface HeaderProps {
  navigation: any;
}

//custom header for the details page
const Header = ({navigation}: HeaderProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
