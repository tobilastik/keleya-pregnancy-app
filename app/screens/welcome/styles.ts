import { StyleSheet } from "react-native";
import { GREYISH_BROWN, WARM_GREY } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imgBg: {
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    welcomeTxt: {
        fontSize: 20,
        textAlign: 'center',
        color: GREYISH_BROWN,
        // marginTop: 40
    }
})