import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.title}>
      <Text style={styles.textTitle}>ATM Consultoria</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#ccc',
    paddingTop: 30,
    height: 80,
  },
  textTitle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },  
});
