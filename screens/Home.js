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
import database from '@react-native-firebase/database';

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
  const [address, setAddress] = useState();
  const [isLoading, setLoading] = useState(true);
  
  const [star, setStar] = useState(4.5);
  Geolocation.getCurrentPosition(
    position => {
      const initialPosition = JSON.stringify(position);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    },
    error => Alert.alert('Error', JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );

  const getAddress = async (latitude, longitude) => {
    try {
      const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=B5FYMmEdbf5LUgZ_pxxh5GG91svQ_S64aZ8RxQgRkSk&mode=retrieveAddresses&prox=${latitude},${longitude}`;
      const response = await fetch(url);
      const json = await response.json();
      try {
        const address = json.Response.View[0].Result[0].Location.Address;
        setAddress(
          json.Response.View[0].Result[0].Location.Address.Subdistrict +
            ', ' +
            address.District +
            ', ' +
            json.Response.View[0].Result[0].Location.Address.Label,
        );
      } catch (error) {}
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAddress(lat, lng);
  }, [lat, lng]);

  
  const [myBook, setMyBook] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const getData = () => {
    database()
    .ref('/books/')
    .once('value')
    .then(snapshot => {
      console.log('User data: ', snapshot.val());
        setMyBook(snapshot.val())
    });
    database()
    .ref('/categories/')
    .once('value')
    .then(snapshot => {
      console.log('User categories: ', snapshot.val());
      setCategories(snapshot.val())
    });
  }    
  useEffect(() => {
    getData()
  }, [])
// for (let i=0;i<myBooksData.length;i++){
//   database()
//   .ref(`/categories/${i}`)
//   .set({
//     id: myBooksData[i].id,
//     bookName: myBooksData[i].bookName,
//     bookCover: myBooksData[i].bookCover,
//     rating:myBooksData[i].rating,
//     author: myBooksData[i].author,
//     genre: myBooksData[i].genre,
//     price:myBooksData[i].price ,
//     description: myBooksData[i].description,
//   })
//   .then(() => console.log('Data set.'));
// }
// for (let i=0;i<categoriesData.length;i++){
//   database()
//     .ref(`/categories/${i}`)
//     .set({
//       id: i,
//       categoryName: categoriesData[i].categoryName
//     })
//   for (let j = 0; j < categoriesData[i].books.length; j++) {
//     database()
//     .ref(`/categories/${i}/book/${j}`)
//     .set({
//       id: categoriesData[i].books[j].id,
//       bookName: categoriesData[i].books[j].bookName,
//       bookCover: categoriesData[i].books[j].bookCover,
//       rating:categoriesData[i].books[j].rating,
//       author: categoriesData[i].books[j].author,
//       genre: categoriesData[i].books[j].genre,
//       price:categoriesData[i].books[j].price ,
//       description: categoriesData[i].books[j].description,
//     })
//     .then(() => console.log('Data set.'));
//   }
// }

  function renderMyBookSection(myBook) {
    const renderItem = ({item, index}) => {
      return (
        <View style={{borderWidth:1, borderColor:COLORS.lightGray, marginHorizontal: 5}}>
          <ScrollView>
            <TouchableOpacity
              style={{
                flex: 1,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginRight: 0,
              }}
              onPress={() =>
                navigation.navigate('BookDetail', {
                  book: item,
                })
              }>
              {/* Book Cover */}
              <View style={{width:180}}>

              <Image
                source={{uri: item.bookCover}}
                resizeMode="center"
                style={{
                  width: 180,
                  height: 240,
                  borderRadius: 5,
                  alignItems:'center'
                }}
              />
              {/* Book Info */}
              <View
                style={{
                  marginTop: 10,
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
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.lightGray,
            }}>
            <Text style={{...FONTS.h5, alignItems: 'flex-start'}}>
              Giao đến
            </Text>
            <Text style={{...FONTS.h4}} numberOfLines={1}>
              {address}
            </Text>
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
            <Text style={{...FONTS.h2, color: COLORS.black}}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text style={{...FONTS.h2, color: COLORS.darkgray}}>
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
    if (categories!=null) {
      var books = [];
      console.log("Log caterogie"+categories[1].book)
      let selectedCategoryBooks = categories.filter(
        a => a.id == selectedCategory,
      );
  
      if (selectedCategoryBooks.length > 0) {
        books = selectedCategoryBooks[0].book;
      }
      console.log("Log book"+books)
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
                <Text style={{...FONTS.h3, color: COLORS.black}}>
                  {item.author}
                </Text>
                <View style={{width: 140, paddingVertical: 5}}>
                  <StarRating
                    fullStarColor={COLORS.primary}
                    starSize={20}
                    disabled={false}
                    maxStars={5}
                    rating={item.rating}
                    selectedStar={rating => setStar(rating)}
                  />
                </View>
                <Text style={{...FONTS.h3, color: COLORS.black}}>
                  {item.price+"đ"}
                </Text>
              </View>

              {/* Book Info */}
          
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
      <ScrollView style={{height:SIZES.height}}>
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
      <View style={{flex:1}}>
        {/* <ScrollView style={{marginTop: SIZES.radius}}> */}
          <View>{renderMyBookSection(myBook)}</View>
          <View style={{marginTop: SIZES.padding}}>
            <View>{renderCategoryHeader()}</View>
            <View>{renderCategoryData()}</View>
          </View>
        {/* </ScrollView> */}
      </View>
      </ScrollView>
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
