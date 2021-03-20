import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

function SearchScreen( ) {
  const [term, setTerm] = React.useState("");
  const [searchApi, results, errorMessage] = useResults();
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Big Spender" />
    </View>
  );
}
const styles = StyleSheet.create({});
export default SearchScreen;
