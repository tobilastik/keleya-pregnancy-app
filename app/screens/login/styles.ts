import {StyleSheet} from 'react-native';
import { GREYISH_BROWN, WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  pageContainer: {
    flex: 1,
     backgroundColor: WHITE, 
    alignItems: 'center'
  },
  imageContainer: {
    backgroundColor: '#E3E6EE',
    flex: 1
    },
    loginContainer: {
      alignItems: 'center',
      flex: 1,

    },
    welcomeTxt: {
       fontSize: 24,
        textAlign: 'center',
        color: GREYISH_BROWN,
        paddingTop: 50
    },
    forgotPassword: {
        fontSize: 17,
        textAlign: 'center',
        color: GREYISH_BROWN,
        paddingTop: 50
    }
});
