import * as React from "react";
import { View, StyleSheet , TextInput} from "react-native";
import { Feather } from "@expo/vector-icons";
function SearchBar({term , onTermChange , onTermSubmit}) {
  return (
    <View style={Styles.background}>
      <Feather name="search" style={Styles.iconStyle} />
      <TextInput
        style={Styles.inputStyle}
        value={term}
        placeholder="Search"
        onChangeText={onTermChange}
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection : "row"
  },
  inputStyle :{
      flex :1 , 
      fontSize : 18
  },
  iconStyle : {
      color : "black",
     fontSize : 35 ,
     alignSelf : "center" ,
     marginHorizontal : 10

  }
});
export default SearchBar;
