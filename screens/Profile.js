import React from 'react';
import { View, Text, Image } from 'react-native';

const Profile = (props) => {
    return (
      <View>
        <Image
          source={{ uri: props.profilePictureUrl }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Hello, {props.name}</Text>
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>Informations personnels </Text>
            </View>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>Publications</Text>
            </View>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>Paramétres du compte</Text>
            </View> <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>Se déconnecter</Text>
            </View>
        </View>
      </View>
    );
  };
  

export default Profile;
