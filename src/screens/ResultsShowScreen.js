import React from 'react';
import { View, Text, StyleSheet , Image , FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import yelp from '../api/yelp';

const ResultsShowScreen = () => {
  const route = useRoute();
  const id = route.params.id
  console.log(id)
  const [result, setResult] = React.useState(null);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  React.useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  
  return (
    <View>
    <Text>{result.name}</Text>
    <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
});

export default ResultsShowScreen;
