import { StyleSheet } from "react-native";
import {  WARM_GREY } from "../../constants/colors";
import { screenWidth } from "../../constants/dimensions";

export const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: WARM_GREY,
        paddingHorizontal: 12,
        width: screenWidth(90),
        paddingVertical: 20
    },
    secureTextIcon: {
        
    }
})