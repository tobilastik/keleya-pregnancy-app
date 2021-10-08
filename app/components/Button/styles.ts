import { StyleSheet } from "react-native";
import {  WHITE } from '../../constants/colors';
import { screenWidth } from '../../constants/dimensions';


export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: screenWidth(85),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 12
  },
  buttonText: {
    fontSize: 20,
    color: WHITE,
    fontWeight: 'bold'
  },
});
