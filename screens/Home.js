import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {COLORS, FONTS} from '../constants';
import Carousel from 'react-native-banner-carousel-updated';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 230;

const Home = () => {
  const [images, setImages] = useState([
    'https://salt.tikicdn.com/ts/banner/29/ff/ec/d6483f3d153d021a41b0688c105a2b53.jpg',
    'https://salt.tikicdn.com/ts/banner/48/b5/92/f903628ba095856df93c83a191258a47.png   ',
    'https://salt.tikicdn.com/ts/banner/48/b5/92/f903628ba095856df93c83a191258a47.png',
  ]);

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
      {renderHeader()}
      <View
        style={{
            margin:10,
            justifyContent:'center'

        }}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
