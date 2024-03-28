import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Entryscreen = () => {
  const navigation = useNavigation();
// useEffect(()=>{
//   const getfunction= async()=>{
//     var istoken =await AsyncStorage.getItem('apitoken')
//   }
//   getfunction();

//   if(istoken){
//     navigation.navigate('home')
//   }else{
//     navigation.navigate('login')
//   }

  
// })
useEffect(() => {
  const getfunction = async () => {
    const istoken = await AsyncStorage.getItem('apitoken');
    if (istoken) {
      navigation.navigate('home');
    } else {
      navigation.navigate('login');
    }
  };
  getfunction();
}, [navigation]);
  return (
 
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        style={styles.mainimg}
        source={require('../assets/images/cupimg.png')}
      />
      <View style={{marginHorizontal: 40}}>
        <Text style={styles.EntryscreenText}>
          Coffee so good , your taste buds will love it .
        </Text>
        <Text style={styles.secandtext}>
          The best grain,the finest roast,the powerful flavor.
        </Text>

        {/* <TouchableOpacity onPress={handlerpress} style={styles.btnview}>
          <Image
            style={styles.goggleicon}
            source={require('../assets/images/search.png')}
          />
          <Text style={styles.btntext}>Continue with Goggle</Text>
        </TouchableOpacity> */}

        <View style={{alignItems:'center',width:'100%',gap:4,}}>
          <TouchableOpacity>
          <Text  
           onPress={()=> navigation.navigate('login')}
          style={styles.logintext}>Login</Text>
          </TouchableOpacity>
        
        <TouchableOpacity>
        <Text 
            onPress={()=>navigation.navigate('signup')}
          style={styles.notaccount}>Don't Have Account</Text>
        </TouchableOpacity>
        
        </View>
      </View>
    
    </View>
   
  );
};

export default Entryscreen;

const styles = StyleSheet.create({
  mainimg: {
    width: '100%',
    height: '60%',
  },
  EntryscreenText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 42.48,
    fontFamily:'Sora-Bold'
  },
  secandtext: {
    fontWeight: '400',
    color: '#A9A9A9',
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 23.48,
    fontSize: 15,
    padding: 15,
    fontFamily:'Sora-Light'
  },
  btnview: {
    backgroundColor: 'white',
    width: '100%',
    height: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  btntext: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily:'Roboto-Bold'
  },
  goggleicon: {
    height: 33,
    width: 33,
  },
  logintext:{
    color:'white',
    padding:3,
    paddingHorizontal:10,
    fontFamily:'Sora-Bold',
    fontSize:20,
  }
  ,
  notaccount:{
    color: '#A9A9A9',
    padding:3,
    fontFamily:'Sora-Bold',
    
  }
});
