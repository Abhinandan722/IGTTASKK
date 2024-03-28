import {StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Profilescr = () => {
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get('https://book-store-backend-ru34.onrender.com/api/user/login')
      .then(res => {
        console.log("its come ",res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  const gettoken=async()=>{
   
    const get= await AsyncStorage.removeItem('apitoken')
    console.log("this is token by get asy storege = ",get)
    Alert.alert("log out succesfull")
    navigation.navigate('login')
  }
  return (
    <View style={styles.container}>
      <View style={styles.or_header_view}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{alignSelf: 'center'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../homeimages/backarrow.png')}
          />
        </TouchableOpacity>
     
        <Text style={styles.or_header_text}>Profile</Text>
      </View>

      <View style={{alignSelf: 'center', marginVertical:responsiveHeight(2)}}>
        <Image
          style={{width:responsiveWidth(30), height:responsiveWidth(30),
             borderRadius:responsiveWidth(15)}}
          source={require('../homeimages/image1.png')}
        />
      </View>

      <View style={{marginVertical: 20, width: '95%',flexDirection:'row',
                    alignItems:'center',gap:15,alignSelf:'center'}}>
        <View style={styles.labelview}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.label}>Mobile:</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.label}>Address:</Text>
        </View>
        <View style={styles.textview}>
        <Text style={styles.text}>John Doe</Text>
        <Text style={styles.text}>123-456-7890</Text>
        <Text style={styles.text}>johndoe@example.com</Text>
        <Text style={styles.text}>1234 Main Street, Indore</Text>
        </View>
       
      </View>
      <TouchableOpacity 
        onPress={gettoken}
      style={styles.logoutBtn} >
        <Text style={styles.loginText}>LOG OUT</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
     
      style={styles.loginBtn} >
        <Text style={styles.loginText}>get asy token</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Profilescr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logoutBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    paddingVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft:responsiveWidth(1),
    marginVertical:responsiveHeight(4)
  },
  loginText: {
    color: 'white',
    fontWeight:'500',
    fontSize:20
  },
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
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 19,
    width:responsiveWidth(70)
  },
  labelview: {
  
    justifyContent: 'flex-start',
    
    gap: 30,
  },
  textview:{
    justifyContent: 'flex-start',
     
    gap: 30,

  }
});
