import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ResultsShowScreen = () => {
  const route = useRoute();
  const id = route.params.id
  console.log(id)
  
  return (
    <View>
      <Text>Results Show</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
