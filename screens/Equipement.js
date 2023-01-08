import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Post = ({ user, text }) => {
    return (
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: './assets/images/{user.id}.png' }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          <Text>{user.name}</Text>
        </View>
        <Text>{text}</Text>
      </View>
    );
  };



const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  
  sqr: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Equipement;