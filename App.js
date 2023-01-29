import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import InputPage from './src/Home/InputPage';


const App = () => {

  return (

      <SafeAreaView style={styles.root}>
          <InputPage />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 root:{
  flex : 1,
  backgroundColor: '#f9fbfc',
  alignItems: 'center',
  justifyContent: 'center',
 },
});

export default App;
