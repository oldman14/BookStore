import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import {books} from './Data'
import {FONTS, COLORS, SIZES, icons} from '../constants';
import Carousel from 'react-native-banner-carousel-updated';
import StarRating from 'react-native-star-rating';
import {connect, useDispatch} from 'react-redux'
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 230;

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray2,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const DetailBook = ({route, navigation, props}) => {
  const [book, setBook] = React.useState(null);
  const dispatch = useDispatch()

    React.useState(0);
  const [star, setStar] = useState(5);


  React.useEffect(() => {
    let {book} = route.params;
    setBook(book);
  }, [book]);

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
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.radius,
                height: 50,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{marginLeft: SIZES.base}}
                onPress={() => navigation.goBack()}>
                <Image
                  source={icons.back_arrow_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: book.navTintColor,
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.h3, color: book.navTintColor}}>
                  Book Detail
                </Text>
              </View>

              <TouchableOpacity
                style={{marginRigth: SIZES.base}}
                onPress={() => console.log('Click More')}>
                <Image
                  source={icons.more_icon}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: book.navTintColor,
                    alignSelf: 'flex-end',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderBookInfoSection() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View
          style={{flex: 5, paddingTop: SIZES.padding2, alignItems: 'center'}}>
          <Image
            source={{uri: book.bookCover}}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 300,
              height: 'auto',
            }}
          />
        </View>

        <View
          style={{
            flex: 1.8,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingHorizontal: 10,
          }}>
          <View>
          <Text style={{...FONTS.h2, color: book.navTintColor, textAlign: 'center'}}>
            {book.bookName}
          </Text>
          <View style={{paddingVertical: 5}}>
            <StarRating
              fullStarColor={COLORS.primary}
              starSize={25}
              disabled={false}
              maxStars={5}
              rating={star}
              selectedStar={rating => setStar(rating)}></StarRating>
          </View>
          <Text style={{...FONTS.h2, color: book.navTintColor, textAlign:'center'}}>
            {book.price + 'đ'}
          </Text>

          </View>
         
        </View>

      </View>
    );
  }

  function renderBookDescription() {

    return (
      <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding}}>
        <ScrollView
          contentContainerStyle={{paddingLeft: SIZES.padding2}}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              marginBottom: SIZES.padding,
              borderBottomWidth:1,
              borderBottomColor: COLORS.lightGray
            }}>
            Thông tin sách
          </Text>
          <Text style={{...FONTS.h4, color: COLORS.black}}>
            {book.description}
          </Text>
        </ScrollView>
      </View>
    );
  }

  function renderBottomButton() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* Bookmark */}
        <TouchableOpacity
          style={{
            width: 40,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Bookmark')}>
          <Text>+</Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: SIZES.h2,
              color: COLORS.black,
              marginLeft: SIZES.padding,
              marginVertical: SIZES.base,
            }}>
            1
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 40,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Bookmark')}>
          <Text>-</Text>
        </TouchableOpacity>
        <View style={{flex:1}} flexDirection='row'>
        <TouchableOpacity
          style={{
            flex: 1.5,
            backgroundColor:COLORS.white,
            borderWidth:2, borderColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Thêm vào giỏ hàng')}>
          <Text style={{...FONTS.h4, color: COLORS.primary}}>
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => dispatch({type:"ADD_CART", payload:books})}>
          <Text style={{...FONTS.h4, color: COLORS.white}}>
            Mua ngay
          </Text>
        </TouchableOpacity>
        </View>
     
      </View>
    );
  }
  if (book) {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
        <View>{renderHeader()}</View>
        <View style={{flex: 4}}>{renderBookInfoSection()}</View>
        <View style={{flex: 2, marginTop:10, backgroundColor: COLORS.white}}>{renderBookDescription()}</View>
        <View style={{height: 60}}>{renderBottomButton()}</View>
      </View>
    );
  } else {
    return <></>;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      addItemToCart: (book) => dispatch({ type: 'ADD_CART', payload: book })
  }
}
export default connect(null, mapDispatchToProps)(DetailBook);
