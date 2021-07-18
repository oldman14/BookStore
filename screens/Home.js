import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {icons, SIZES, COLORS, FONTS} from '../constants';
import Carousel from 'react-native-banner-carousel-updated';
import StarRating from 'react-native-star-rating';
import Geolocation from '@react-native-community/geolocation';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 230;

const Home = ({navigation}) => {
  const [images, setImages] = useState([
    'https://salt.tikicdn.com/ts/banner/29/ff/ec/d6483f3d153d021a41b0688c105a2b53.jpg',
    'https://salt.tikicdn.com/ts/banner/48/b5/92/f903628ba095856df93c83a191258a47.png   ',
    'https://salt.tikicdn.com/ts/banner/48/b5/92/f903628ba095856df93c83a191258a47.png',
  ]);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [address, setAddress] = useState()
  const [isLoading, setLoading] = useState(true);

    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        console.log(position.coords.latitude);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );

    const getAddress = async (latitude, longitude) =>{
      try {
        const url = (`https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=B5FYMmEdbf5LUgZ_pxxh5GG91svQ_S64aZ8RxQgRkSk&mode=retrieveAddresses&prox=${latitude},${longitude}`);
        const response = await fetch(url);
        const json = await response.json();
        console.log(url)
        try {
          const address = json.Response.View[0].Result[0].Location.Address;
          setAddress(json.Response.View[0].Result[0].Location.Address.Subdistrict+', '+address.District+', '+json.Response.View[0].Result[0].Location.Address.Label);
        } catch (error) {
          
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      console.log("log lan 1"+lat)
      getAddress(lat, lng);
    }, [lat, lng]);
  
    
  const bookOtherWordsForHome = {
    id: 1,
    bookName: 'Other Words For Home',
    bookCover:
      'https://salt.tikicdn.com/cache/280x280/ts/product/15/11/f8/56b303e000cb42faada663569fc5d7c9.jpg',
    rating: 4.5,
    language: 'Eng',
    pageNo: 341,
    author: 'Jasmine Warga',
    genre: ['Romance', 'Adventure', 'Drama'],
    readed: '12k',
    price: 45000,
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: 'The Metropolis',
    bookCover:
      'https://salt.tikicdn.com/cache/280x280/ts/product/b2/56/d3/17262447faaef713be60d6b25ec0551d.jpg',
    rating: 4.1,
    language: 'Eng',
    pageNo: 272,
    author: 'Seith Fried',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
    price: 45000,

    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: 'The Tiny Dragon',
    bookCover:
      'https://salt.tikicdn.com/cache/280x280/ts/product/9b/4b/8a/04ffa4c4673af50ef2e594bf8e4f6fa1.jpg',
    rating: 3.5,
    language: 'Eng',
    pageNo: 110,
    author: 'Ana C Bouvier',
    genre: ['Drama', 'Adventure', 'Romance'],
    readed: '13k',
    price: 45000,
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: '75%',
      lastRead: '3d 5h',
    },
    {
      ...bookTheMetropolis,
      completion: '23%',
      lastRead: '10d 5h',
    },
    {
      ...bookTheTinyDragon,
      completion: '10%',
      lastRead: '1d 2h',
    },
  ];
  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    },
    {
      id: 2,
      categoryName: 'The Latest',
      books: [bookTheMetropolis],
    },
    {
      id: 3,
      categoryName: 'Coming Soon',
      books: [bookTheTinyDragon],
    },
  ];
  const [myBook, setMyBook] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [star, setStar] = useState(5);

  function renderMyBookSection(myBook) {
    const renderItem = ({item, index}) => {
      return (
        <View>
          <ScrollView>
            <TouchableOpacity
              style={{
                flex: 1,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginRight: SIZES.radius,
              }}
              onPress={() =>
                navigation.navigate('BookDetail', {
                  book: item,
                })
              }>
              {/* Book Cover */}
              <Image
                source={{uri: item.bookCover}}
                resizeMode="cover"
                style={{
                  width: 180,
                  height: 250,
                  borderRadius: 20,
                }}
              />
              {/* Book Info */}
              <View
                style={{
                  marginTop: SIZES.radius,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{marginLeft: 5, ...FONTS.body3, color: COLORS.black}}>
                  {item.bookName}
                </Text>

                <Text
                  style={{marginLeft: 5, ...FONTS.body3, color: COLORS.black}}>
                  {item.price}
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      );
    };

    return (
      <View style={{flex: 1}}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h2, color: COLORS.black}}>My Book</Text>

          <TouchableOpacity onPress={() => console.log('See More')}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.black,
                alignSelf: 'flex-start',
                textDecorationLine: 'underline',
              }}>
              see more
            </Text>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <FlatList
            data={myBook}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth:1,
              borderBottomColor: COLORS.lightGray
            }}>
            <Text style={{...FONTS.h5, alignItems:'flex-start'}}>Giao đến</Text>
            <Text style={{...FONTS.h4}} numberOfLines={1}>{address}</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, marginRight: SIZES.padding}}
          onPress={() => setSelectedCategory(item.id)}>
          {selectedCategory == item.id && (
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text style={{...FONTS.h2, color: COLORS.lightGray}}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1, paddingLeft: SIZES.padding}}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      a => a.id == selectedCategory,
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({item}) => {
      return (
        <View style={{marginVertical: SIZES.base}}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
            onPress={() =>
              navigation.navigate('BookDetail', {
                book: item,
              })
            }>
            {/* Book Cover */}
            <Image
              source={{uri: item.bookCover}}
              resizeMode="cover"
              style={{width: 100, height: 150, borderRadius: 10}}
            />

            <View style={{flex: 1, marginLeft: SIZES.radius}}>
              {/* Book name and author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h2,
                    color: COLORS.black,
                  }}>
                  {item.bookName}
                </Text>
                <View style={{width: 120, paddingVertical: 5}}>
                  <StarRating
                    fullStarColor={COLORS.primary}
                    starSize={25}
                    disabled={false}
                    maxStars={5}
                    rating={star}
                    selectedStar={rating => setStar(rating)}
                  />
                </View>

                <Text style={{...FONTS.h3, color: COLORS.black}}>
                  {item.author}
                </Text>
              </View>

              {/* Book Info */}
              <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.pageNo}
                </Text>

                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.readed}
                </Text>
              </View>

              {/* Genre */}
              <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
                {item.genre.includes('Adventure') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes('Romance') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes('Drama') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightBlue}}>
                      Drama
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            style={{position: 'absolute', top: 5, right: 15}}
            onPress={() => console.log('Bookmark')}>
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightGray,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding}}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{width: BannerWidth - 20, height: BannerHeight}}
          source={{uri: image}}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>{renderHeader()}</View>
      <View
        style={{
          margin: 10,
          justifyContent: 'center',
        }}>
        <View>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel>
        </View>
      </View>
      <View style={{height: 500}}>
        <ScrollView style={{marginTop: SIZES.radius}}>
          <View>{renderMyBookSection(myBook)}</View>
          <View style={{marginTop: SIZES.padding}}>
            <View>{renderCategoryHeader()}</View>
            <View>{renderCategoryData()}</View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
