import React from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity, Dimensions, SafeAreaView, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { height } = Dimensions.get('window');
import COLORS from './Lista/colors';
import pets from './Lista/items';



const petCategories = [
  {name: 'ANIMAIS', MaterialCommunityIcons: 'home-heart'},
  {name: 'CATS', MaterialCommunityIcons: 'cat'},
  {name: 'DOGS', MaterialCommunityIcons: 'dog'},
  {name: 'BIRDS', MaterialCommunityIcons: 'language-swift'},
  {name: 'BUNNIES', MaterialCommunityIcons: 'rabbit'},
];


const Card = ({pet, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', pet)}>
      <View style={styles.cardContainer}>
        {/* Render the card image */}
        <View style={styles.cardImageContainer}>
          <Image
            source={pet.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
      
        {/* Render all the card details here */}
        <View style={styles.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 20}}>
              {pet?.name}
            </Text>
            <MaterialCommunityIcons name="gender-male" size={22} color={COLORS.grey} />
          </View>

          {/* Render the age and type */}
          <Text style={{fontSize: 12, marginTop: 5, color: COLORS.dark}}>
            {pet?.type}
          </Text>
          <Text style={{fontSize: 10, marginTop: 5, color: COLORS.grey}}>
            {pet?.age}
          </Text>

          {/* Render distance and the icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <MaterialCommunityIcons name="map-marker" color={COLORS.primary} size={18} />
            <Text style={{fontSize: 12, color: COLORS.grey, marginLeft: 5}}>
              Distance:7.8km
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredPets, setFilteredPets] = React.useState([]);

  const fliterPet = index => {
    const currentPets = pets.filter(
      item => item?.pet?.toUpperCase() == petCategories[index].name,
    )[0]?.pets;
    setFilteredPets(currentPets);
  };

  React.useEffect(() => {
    fliterPet(0);
  }, []);
   
  return (
    <SafeAreaView style={{flex: 1, color: COLORS.white}}>
      <View style={styles.container}>
        <Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 16}}>HOMEPETS</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={true}>
        <View style={styles.mainContainer}>
          <View style={styles.searchInputContainer}>
            <MaterialCommunityIcons name="magnify" size={24} color={COLORS.grey} />
            <TextInput placeholder="Pesquise o serviço" style={{flex: 1}} />
            <MaterialCommunityIcons name="sort-ascending" size={24} color={COLORS.grey} />
          </View>
        
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            {petCategories.map((item, index) => (
              <View key={'pet' + index} style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    setSeletedCategoryIndex(index);
                    fliterPet(index);
                  }}
                  style={[
                    styles.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.white,
                    },
                  ]}>
                  <MaterialCommunityIcons
                    name={item.MaterialCommunityIcons}
                    size={30}
                    color={
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
          </View>
            <View style={{marginTop: 20}}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={filteredPets}
                renderItem={({item}) => (
                  <Card pet={item} navigation={navigation} />
                )}
              />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
})


export default HomeScreen;

