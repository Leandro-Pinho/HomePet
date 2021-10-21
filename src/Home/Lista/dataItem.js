import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements'; 
import { FontAwesome } from '@expo/vector-icons';


const images = [
  {
    key: 1,
    name: "Nathan Anderson",
    uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign1_byvldn.png',
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  },
  {
    key: 2,
    name: "Jamison McAndie",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign2_hfbowa.png'},
    url: "https://unsplash.com/photos/waZEHLRP98s"
  },
  {
    key: 3,
    name: "Alberto Restifo",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign3_utrh6j.jpg'},
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  },
  {
    key: 4,
    name: "John Towner",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign4_wlc7p1.jpg'},
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  },
  {
    key: 5,
    name: "John Towner",
    uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817882/campaign5_wudgxu.jpg',
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  },
  {
    key: 6,
    name: "John Towner",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'},
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  },
];

class Store extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="user" size={24} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          {images.map(({ name, uri, url, key }) => (
            <Card image={uri} key={key}>
              <Text style={{ marginBottom: 10 }}>
                Photo by {name}.
              </Text>
              <Button
                buttonStyle={{backgroundColor: "#03A9F4"}}
                title="View more"
                onPress={() => Linking.openURL(url)}
              />
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
    logo: {
      backgroundColor: "#056ecf",
      height: 300,
      width: 300,
    }
});

export default Store;