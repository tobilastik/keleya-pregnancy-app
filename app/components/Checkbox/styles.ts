import { StyleSheet } from "react-native";
import { GREYISH_BROWN, PALE_TEAL } from "../../constants/colors";

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
    borderColor: PALE_TEAL,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: PALE_TEAL,
  },
  checkboxText: {
    marginLeft: 8,
    color: GREYISH_BROWN,
  },
});
