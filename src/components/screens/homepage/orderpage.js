import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Orderpage = ({route}) => {

  const isFocused = useIsFocused();
  const [isvisible,setIsvisible]=useState(0)

  const navigation = useNavigation();
  const {item} = route.params;
  console.log('in order screen', item);

  return (
    <View style={{flex: 1, padding: 20}}>
      <View style={styles.or_header_view}>
        <TouchableOpacity 
            onPress={()=>navigation.goBack()}
        style={{alignSelf: 'center'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../homeimages/backarrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.or_header_text}>Order</Text>
      </View>
      <View style={styles.delvery_picup_btn_view}>
        <TouchableOpacity  
          onPress={()=>setIsvisible(0)}
           style={[styles.delivery_btn,{backgroundColor:isvisible==0?'#C67C4E':'white'}]}>
          <Text style={[styles.btn_text_delvry,{color:isvisible==0?'white':'black'}]}>Deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>setIsvisible(1)}
          style={[styles.delivery_btn, {backgroundColor:isvisible==0?'white':'#C67C4E'}]}>
          <Text style={[styles.btn_text_delvry_bynow,{color:isvisible==0?'black':'white'}]}>Pick Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.addresstext}> Delivery Address</Text>
      <Text style={{fontSize: 16, color: '#2F2D2C', fontWeight: '600'}}>
        JI.Kpg sutoyo
      </Text>
      <Text style={styles.fulladdress}>
        Kpg.Sutoyo No. 620, Bilzer,Tunjugblai
      </Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity style={styles.editaddres_view}>
          <Image
            style={[styles.editicon, {}]}
            source={require('../homeimages/edit.png')}
          />
          <Text style={{fontSize: 12, color: '#303336'}}>Edit Address</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editaddres_view}>
          <Image
            style={[styles.editicon, {}]}
            source={require('../homeimages/note.png')}
          />
          <Text style={{fontSize: 12, color: '#303336'}}>Add Note</Text>
        </TouchableOpacity>
      </View>

      {/* horizintal line  */}
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          marginVertical: 15,
        }}
      />
      <View style={styles.name_view_img}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Image style={[styles.importname_img]} source={item.image} />
          <View style={styles.import_name_suname_view}>
            <Text style={{fontSize: 19, fontWeight: '600', color: '#2F2D2C'}}>
              {item.category}
            </Text>
            <Text style={{fontSize: 15, fontWeight: '400', color: '#9B9B9B'}}>
              {item.subname}
            </Text>
          </View>
        </View>
        <View style={styles.in_dec_view}>
          <View style={styles.inc_view_btn}>
            <Text style={{fontSize: 20}}>--</Text>
          </View>

          <Text style={{fontSize: 20}}>1</Text>

          <View style={styles.inc_view_btn}>
            <Text style={{fontSize: 20}}>+</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.3,
          marginVertical: 20,
          marginTop: 30,
        }}
      />
      <TouchableOpacity style={styles.dis_btnview}>
        <View style={{flexDirection: 'row', gap: 10,alignItems:'center'}}>
          <Image
            style={styles.dis_img}
            source={require('../homeimages/Discount.png')}
          />
          <Text style={[styles.btntext,{fontFamily:'Sora-Bold'}]}> 1 Discount is applied</Text>
        </View>
        <Image
          style={styles.dis_img}
          source={require('../homeimages/arrowright.png')}
        />
      </TouchableOpacity>

      <Text style={styles.pay_summ}>Payment Summary</Text>
      <View style={styles.or_p_sum_view}>
        <Text style={{fontSize: 15, color: '#2F2D2C', fontWeight: '400'}}>
          Price
        </Text>
        <Text style={{fontSize: 15, color: '#2F2D2C', fontWeight: '600',}}>
          {item.price}
        </Text>
      </View>

      <View style={styles.or_p_sum_view}>
        <Text style={{fontSize: 15, color: '#2F2D2C', fontWeight: '500',fontFamily:'Sora-Regular'}}>
          Delivery Fee
        </Text>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Text style={{fontSize: 15, color: '#2F2D2C', fontWeight: '400',fontFamily:'Sora-regular'}}>
            $ 2.0
          </Text>
          <Text style={{fontSize: 15, color: '#2F2D2C', fontWeight: '600',fontFamily:'Sora-Bold'}}>
            $ 1.0
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          marginVertical: 5,
          marginTop: 5,
        }}
      />
      <View style={[styles.or_p_sum_view, {marginVertical: 0}]}>
        <Text style={{fontSize: 15, color: '#2F2D2C', fontWeight: '400',fontFamily:'Sora-Regular'}}>
          Total Payment
        </Text>
        <Text style={{fontSize: 15, color: '#2F2D2C', fontWeight: '600',fontFamily:'Sora-Bold'}}>
          $ 5.53
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
        }}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Image
            style={styles.dis_img}
            source={require('../homeimages/moneys.png')}
          />
          <TouchableOpacity style={styles.cashbtn}>
            <Text style={{color: 'white', fontFamily:'Sora-Regular'}}>Cash</Text>
          </TouchableOpacity>
          <Text style={{color: '#2F2D2C', fontSize: 12, fontWeight: '500', fontFamily:'Sora-Regular'}}>
            $ 5.53
          </Text>
        </View>
        <Image
          style={styles.dis_img}
          source={require('../homeimages/dots.png')}
        />
      </View>
      <TouchableOpacity style={styles.lastbtn}>
        <Text style={styles.bottom_btntext}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Orderpage;

const styles = StyleSheet.create({
  or_header_text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#2F2D2C',
    paddingVertical: 4,
  },
  or_header_view: {
    height: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 140,
  },
  delvery_picup_btn_view: {
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    marginVertical: 20,
  },
  delivery_btn: {
    width: '50%',
    height: 48,
    backgroundColor: '#C67C4E',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text_delvry: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  btn_text_delvry_bynow: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  addresstext: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2F2D2C',
    marginVertical: 10,
  },
  fulladdress: {
    fontSize: 13,
    fontWeight: '400',
    color: '#808080',
    marginVertical: 10,
    fontFamily:'Sora-Regular'
  },
  editaddres_view: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    paddingHorizontal: 12,
    borderColor: '#DEDEDE',
    flexDirection: 'row',
    gap: 5,
    width: 'auto',
  },
  editicon: {},
  editnoteicon: {
    flexDirection: 'row',
  },
  importname_img: {
    width: 54,
    height: 54,
    borderRadius: 12,
  },
  name_view_img: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    justifyContent: 'center',
    gap: 40,
  },
  in_dec_view: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inc_view_btn: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dis_btnview: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 315,
    height: 56,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    borderRadius: 14,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  btntext: {
    color: '#2F2D2C',
    fontSize: 16,
    fontWeight: '600',
  },
  pay_summ: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2F2D2C',
  },
  or_p_sum_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  lastbtn: {
    width: '100%',
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
  cashbtn: {
    backgroundColor: '#C67C4E',
    padding: 3,
    paddingHorizontal: 8,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center'
  },
});
