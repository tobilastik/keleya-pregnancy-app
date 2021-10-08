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
    notificationTxt: {
        fontSize: 24,
        textAlign: 'center',
        color: GREYISH_BROWN,
        paddingHorizontal: 40
    },
    skipTxt: {
        fontSize: 20,
        textAlign: 'center',
        color: GREYISH_BROWN
    }
})