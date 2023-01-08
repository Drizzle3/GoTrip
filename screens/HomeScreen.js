import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import TripPubData from './assets/data/TripPubData';
import EquipPubData from "../assets/EquipPubData";
import {SafeAreaView} from 'react-native-safe-area-context';
import profile from './assets/images/person.png';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import SearchBar from './SearchBar';

Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItem = ({item}) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          {
            marginLeft: item.id === 'activities-1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const App = () => {
    const handleSearch = searchTerm => {
      // Performing  search logic 
    };
  
    return <SearchBar onSearch={handleSearch} />;
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {
            marginLeft: item.id === 'learnMore-1' ? 20 : 0,
          },
        ]}
        imageStyle={styles.learnMoreItemImage}>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View >
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* annonce */}
        <View style={styles.annonceWrapper}>
          <Text style={styles.annonceTitle}>annonce</Text>
          <View style={styles.annonceCategoriesWrapper}>
            <Text style={[styles.annonceCategoryText, {color: colors.blue}]}>
            </Text>
            <Text style={styles.annonceCategoryText}>Lieu Départ</Text>
            <Text style={styles.annonceCategoryText}>Destination</Text>
            <Text style={styles.annonceCategoryText}>Durée</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: '.\assets\images\abdelhamid-azoui-JqoRzl4F6xg-unsplash.jpg' }} style={{ width: 150, height: 150 }} />
              <Image source={{ uri: '.\assets\images\louis-hansel-wgsJ52gCXuw-unsplash.jpg' }} style={{ width: 150, height: 150 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  
  activitiesWrapper: {
    marginTop: 10,
  },
 
});

export default Home;