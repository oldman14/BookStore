import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {icons, SIZES, COLORS, FONTS} from '../constants';

const Order = () => {
  const product = useSelector(state => state);
  const dispatch = useDispatch()
    console.log(product)
  useEffect(() => {
    console.log(product);
  }, [product]);
  const renderCart = ({item}) => {
    return (
      <View
        flex={1}
        flexDirection="row"
        style={{padding: 8, backgroundColor: COLORS.lightGray4, margin: 5}}>
        <View backgroundColor="#f90">
          <Image
            source={{uri: item.bookCover}}
            resizeMode="cover"
            style={{
              width: 80,
              height: 120,
              borderRadius: 5,
              alignItems: 'center',
            }}
          />
        </View>
        <View flexDirection="column" style={{padding: 8, }}>
          <Text style={{fontSize: SIZES.h3, fontWeight: 'bold'}}>
            {item.bookName}
          </Text>
          <Text style={{paddingVertical:5,fontSize: SIZES.h3,color: COLORS.primary}}>{item.price + `đ`}</Text>
          <View flexDirection="row">
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.secondary,
                width: 40,
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
                backgroundColor: COLORS.secondary,
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
            <TouchableOpacity
                style={{justifyContent:'center', paddingLeft:100}}
                onPress={() => dispatch({type:"DELETE_CART", payload:item})}
>
               <Image
               style={{width:30, height:30}}
                    source={require('../assets/icons/icons8_delete.png')}
               />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
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
              borderBottomWidth: 1,
              borderBottomColor: COLORS.lightGray,
            }}>
            <Text
              style={{
                fontSize: SIZES.h2,
                color: COLORS.white,
                alignItems: 'flex-start',
              }}>
              Giỏ Hàng
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <View>{renderHeader()}</View>
      <FlatList
        data={product}
        renderItem={renderCart}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default Order;
