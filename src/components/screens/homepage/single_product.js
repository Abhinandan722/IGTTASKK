import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Single_product = ({route,}) => {
  
  const navigation = useNavigation();
  const [isvisible,setIsvisible]=useState(0)
  const {item} = route.params;

  console.log('item in detial page', item);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
      }}>
      <View style={styles.header_view}>
        <TouchableOpacity 
         onPress={()=>navigation.goBack()}
          >
          <Image
            style={styles.sp_arrow_header_img}
            source={require('../homeimages/backarrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.sp_header_text}>Detail</Text>
        <TouchableOpacity>
          <Image
            style={styles.sp_heart_header_img}
            source={require('../homeimages/heart.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.product_detial_view}>
        <View style={styles.main_big_img_view}>
        <Image style={styles.main_big_img} source={item.image} />
        </View>
        

        <Text style={styles.category_name}>{item.category}</Text>
        <Text style={styles.category_sub_name}>{item.subname}</Text>
      </View>
      <View style={styles.sp_rating_view}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image
            style={[styles.sp_arrow_header_img, {tintColor: '#FBBE21'}]}
            source={require('../homeimages/star.png')}
          />
          <Text style={styles.sp_rating}>
            {`${item.rating}`}
            <Text style={{marginLeft:5, color: '#9B9B9B',fontSize:15}}>(230)</Text> </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <View
            style={{padding: 10, backgroundColor: '#FFF0F0', borderRadius: 10}}>
            <Image
              style={[styles.sp_arrow_header_img, {tintColor: '#FBBE21'}]}
              source={require('../homeimages/Maskgroup.png')}
            />
          </View>
          <View
            style={{padding: 10, backgroundColor: '#FFF0F0', borderRadius: 10}}>
            <Image
              style={[styles.sp_arrow_header_img, {tintColor: '#FBBE21'}]}
              source={require('../homeimages/mask.png')}
            />
          </View>
        </View>
      </View>
      {/* start horizontal line */}
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          marginVertical: 20,
          marginTop: 30,
        }}
      />
      <View>
        <Text style={styles.discription}>Description</Text>
        <Text style={styles.discription_detial}> {item.discription}</Text>
      </View>
      <Text style={styles.size_name}>Size</Text>

      <View style={styles.sizebtn_view}>
        <TouchableOpacity
              onPress={()=>setIsvisible(1)}         
        style={[styles.sizebtn_f_view,{backgroundColor:isvisible==1?'#FFF5EE':'white',
         borderColor:isvisible==1?'#C67C4E':'#DEDEDE'
        }]}>
          <Text style={{color:isvisible==1?'#C67C4E':'black', fontSize: 14}}>S</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=>setIsvisible(0)}  
        style={[styles.sizebtn_f_view,{backgroundColor:isvisible==0?'#FFF5EE':'white',
        borderColor:isvisible==0?'#C67C4E':'#DEDEDE'       
        }]}>
          <Text style={{color:isvisible==1?'#C67C4E':'black', fontSize: 14}}>M</Text>
        </TouchableOpacity>

        <TouchableOpacity
           onPress={()=>setIsvisible(2)}   
        style={[styles.sizebtn_f_view,{backgroundColor:isvisible==2?'#FFF5EE':'white',
        borderColor:isvisible==2?'#C67C4E':'#DEDEDE'
        }]}>
          <Text style={{color:isvisible==2?'#C67C4E':'black', fontSize: 14}}>L</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom_view}>
        <View style={styles.bottom_price_view}>
          <Text style={{color: '#9B9B9B', fontSize: 16, fontFamily:'Sora-Regular'}}>Price</Text>
          <Text style={{color: '#C67C4E', fontSize: 20, fontWeight: '600', fontFamily:'Sora-Bold'}}>
            {item.price}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('orderpage', {item})}
          style={styles.lastbtn}>
          <Text style={styles.bottom_btntext}>By Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Single_product;

const styles = StyleSheet.create({
  header_view: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  sp_arrow_header_img: {
    width: 24,
    height: 24,
  },
  sp_heart_header_img: {
    width: 24,
    height: 24,
    marginRight:5

  },
  sp_header_text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2F2D2C',
    lineHeight: 22,
    letterSpacing: 1,
    fontFamily:'Sora-Bold'
  },
  main_big_img: {
    width: 345,
    height: 225,
    marginVertical: 20,
  borderRadius:15
  },
  main_big_img_view:{

  },
  product_detial_view: {
    alignSelf: 'center',
  },
  category_name: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '600',
    color: '#2F2D2C',
    fontFamily:'Sora-Bold'
  },
  category_sub_name: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    color: '#9B9B9B',
    marginVertical: 5,
    fontFamily:'Sora-Medium',
    paddingBottom:4,
    height:'auto'
  },
  sp_rating_view: {
    margin: 10,
    flexDirection: 'row',
  },
  sp_rating: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '600',
    color: '#2F2D2C',
  },
  sp_rating_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  discription: {
    fontSize: 20,
    lineHeight: 20.16,
    fontWeight: '600',
    color: '#2F2D2C',
    fontFamily:'Sora-Bold'
  },
  discription_detial: {
    width: 314,
    marginVertical: 20,
    lineHeight: 23,
    letterSpacing: 0.2,
    fontWeight: '400',
    color: '#9B9B9B',
    fontFamily:'Sora-Regular'
  },
  size_name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2F2D2C',
    fontFamily:'Sora-Bold'
  },
  sizebtn_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizebtn_f_view: {
    width: 96,
    height: 43,
    borderRadius: 12,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth:1,
  },
  bottom_view: {
    height: 84,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
  },
  bottom_price_view: {
    gap: 2,
  },
  lastbtn: {
    width: 217,
    height: 55,
    backgroundColor: '#C67C4E',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_btntext: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    fontFamily:'Sora-Bold'
  },
});
