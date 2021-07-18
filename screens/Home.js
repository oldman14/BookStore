import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {icons, SIZES, COLORS, FONTS} from '../constants';
import Carousel from 'react-native-banner-carousel-updated';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 230;

const Home = () => {
  const [images, setImages] = useState([
    'https://salt.tikicdn.com/ts/banner/29/ff/ec/d6483f3d153d021a41b0688c105a2b53.jpg',
    'https://salt.tikicdn.com/ts/banner/48/b5/92/f903628ba095856df93c83a191258a47.png   ',
    'https://salt.tikicdn.com/ts/banner/48/b5/92/f903628ba095856df93c83a191258a47.png',
  ]);

  const bookOtherWordsForHome = {
    id: 1,
    bookName: "Other Words For Home",
    bookCover: 'https://salt.tikicdn.com/cache/280x280/ts/product/15/11/f8/56b303e000cb42faada663569fc5d7c9.jpg',
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: [
        "Romance", "Adventure", "Drama"
    ],
    readed: "12k",
    price: 45000,
    description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000"
}

const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: 'https://salt.tikicdn.com/cache/280x280/ts/product/b2/56/d3/17262447faaef713be60d6b25ec0551d.jpg',
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: [
        "Adventure", "Drama"
    ],
    readed: "13k",
    price: 45000,

    description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000"
}

const bookTheTinyDragon = {
    id: 3,
    bookName: "The Tiny Dragon",
    bookCover: 'https://salt.tikicdn.com/cache/280x280/ts/product/9b/4b/8a/04ffa4c4673af50ef2e594bf8e4f6fa1.jpg',
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: [
        "Drama", "Adventure", "Romance"
    ],
    readed: "13k",
    price: 45000,
    description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF"
}

  const myBooksData = [
    {
        ...bookOtherWordsForHome,
        completion: "75%",
        lastRead: "3d 5h",

    },
    {
        ...bookTheMetropolis,
        completion: "23%",
        lastRead: "10d 5h",

    },
    {
        ...bookTheTinyDragon,
        completion: "10%",
        lastRead: "1d 2h",

    }
]
const categoriesData = [
    {
        id: 1,
        categoryName: "Best Seller",
        books: [
            bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
        ]
    },
    {
        id: 2,
        categoryName: "The Latest",
        books: [
            bookTheMetropolis
        ]
    },
    {
        id: 3,
        categoryName: "Coming Soon",
        books: [
            bookTheTinyDragon
        ]
    },
]
    const [myBook, setMyBook] = useState(myBooksData)
    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState(1);
  function renderMyBookSection(myBook) {

    const renderItem = ({ item, index }) => {
        return (<View>
            <ScrollView>
             <TouchableOpacity
                style={{
                    flex: 1,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius
                }}
                onPress={() => navigation.navigate("BookDetail", {
                    book: item
                })}
            >
                {/* Book Cover */}
                <Image
                    source={{uri: item.bookCover}}
                    resizeMode="cover"
                    style={{
                        width: 180,
                        height: 250,
                        borderRadius: 20
                    }}
                />
                {/* Book Info */}
                <View style={{ marginTop: SIZES.radius, flexDirection: 'column', alignItems: 'flex-start' }}>
               
                    <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.black }}>{item.bookName}</Text>

                    <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.black }}>{item.price}</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>
     </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...FONTS.h2, color: COLORS.black }}>My Book</Text>

                <TouchableOpacity
                    onPress={() => console.log("See More")}
                >
                    <Text style={{ ...FONTS.body3, color: COLORS.black, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
                </TouchableOpacity>
            </View>

            {/* Books */}
            <View style={{ flex: 1, marginTop: SIZES.padding }}>
                <FlatList
                    data={myBook}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h3}}></Text>
          </View>
        </View>
      </View>
    );
  }

  function renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{width: BannerWidth-20, height: BannerHeight}}
          source={{uri: image}}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <View>
        {renderHeader()}

        </View>
      <View
        style={{
            margin:10,
            justifyContent:'center'

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
      <View style={{height:500}}>
      <ScrollView  style={{ marginTop: SIZES.radius }}>
                {/* Books Section */}
                    <View>
                    {renderMyBookSection(myBook)}

                    </View>
                    <View>
                    {renderMyBookSection(myBook)}

                    </View>
                {/* Categories Section */}

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
