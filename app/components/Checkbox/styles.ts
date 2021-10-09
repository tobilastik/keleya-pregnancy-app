import { StyleSheet } from "react-native";
import { GREYISH_BROWN } from "../../constants/colors";

export const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 30,
    marginVertical: 8,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#539eff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#539eff',
  },
  checkboxText: {
    marginLeft: 8,
    color: GREYISH_BROWN,
  },
});
