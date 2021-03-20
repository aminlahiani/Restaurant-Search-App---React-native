import React from 'react';
import { View, Text, StyleSheet , Image , FlatList , ScrollView } from 'react-native';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.name}>{result.name}</Text>
    <Text style={styles.text}>{result.rating} Stars  </Text>
    <Text style={styles.text}>{result.review_count} Reviews </Text>
      <Text style={styles.text}>{result.phone}</Text>
      <ScrollView>
    <FlatList
        data={result.photos}
        showsVerticalScrollIndicator={false}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      </ScrollView>
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
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 10
  },
  text : {
    fontSize: 20,
    marginBottom :10,
    marginTop: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom :20,
    marginTop: 20
  }
});

export default ResultsShowScreen;
