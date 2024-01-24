import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'skyblue' }]}></View>
      <View style={[styles.box, { backgroundColor: 'blue' }]}></View>
      <View style={[styles.box1]}>
        <View style={[styles.box, { backgroundColor: 'white' }]}></View>
        <View style={[styles.box, { backgroundColor: 'black' }]}></View>
      </View>
      <View style={[styles.box, { backgroundColor: 'gray' }]}></View>
      <View style={[styles.box, { backgroundColor: 'yellow' }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    flex: 1,
  },
  box1: {
    flex: 1,
    flexDirection: 'row',
  },
});
