import * as React from "react";
import { View, Text, Button } from "react-native";
import SearchBar from "../components/SearchBar";

function SearchScreen({ navigation }) {
  return (
    <View >
      <SearchBar/>
      <Button
        title="Go Detail Screen"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

export default SearchScreen;
