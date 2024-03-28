import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  keyboardVerticalOffset,
  Alert,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Signup = () => {
  const navigation = useNavigation();
  const [badname, setBadname] = useState(false);
  const [bademail, setBademail] = useState(false);
  const [badpassword, setBadpassword] = useState(false);
  const [saveinput, SetSaveinput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLogin = async() => {
    if (saveinput.name == '' || saveinput.name.length >= 20) {
      setBadname(true);
    } else {
      setBadname(false);
      if (
        saveinput.email == '' ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(saveinput.email)
      ) {
        setBademail(true);
      } else {
        setBademail(false);
        if (
          saveinput.password === '' ||
          !/(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{6,}/.test(saveinput.password)
        ) {
          setBadpassword(true);
        } else {
          setBadpassword(false);
          try{
            const response = await axios.post('https://book-store-backend-ru34.onrender.com/api/user/register',saveinput)
            console.log(response.data);
            Alert.alert("sign up successfull")
            navigation.goBack();

          }catch(error){
            console.log(error);
            Alert.alert('Please enter correct email or password');

          }

          // axios
          //   .post(
          //     'https://book-store-backend-ru34.onrender.com/api/user/register',
          //     saveinput,
          //   )
          //   .then(res => {
          //     console.log(res.data);
          //     Alert.alert('Sign Up successfull');
          //     navigation.goBack();
          //   })
          //   .catch(err => {
          //     console.log(err.response);
          //   });

        }
      }
    }

    // if (saveinput.name== ''||saveinput.name.length >= 20) {
    //   setBadname(true)
    // }else{
    //   setBadname(false);

    //   if(saveinput.email==''||  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(saveinput.email)){
    //     setBademail(true)
    //   }else{
    //     setBademail(false)
    //     if(saveinput.mobile==''|| saveinput.mobile.length<10|| saveinput.mobile.length>10 ){
    //       setBadmobile(true)
    //     }else{
    //       setBadmobile(false)

    //       if( saveinput.password === '' ||
    //       !/(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{6,}/.test(saveinput.password)
    //     ){
    //         setBadpassword(true)
    //       }else{
    //         setBadpassword(false)
    //         if(saveinput.address==''||saveinput.address.length<5){
    //           setBadaddress(true)
    //         }
    //         else{
    //           setBadaddress(false)
    //           axios
    //           .post('http://10.0.2.2:4040/user/register',saveinput)
    //           .then(res => {
    //             console.log(res)
    //             Alert.alert("Sign Up successfull")
    //             navigation.goBack()
    //             })
    //           .catch(err => {
    //             console.log(err.response);
    //           });

    //         }
    //       }
    //     }
    //   }

    // }
  };

  const handlerinput = (name, value) => {
    SetSaveinput({...saveinput, [name]: value});
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <View style={styles.or_header_view}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{alignSelf: 'center'}}>
          <Image
            style={{width: 24, height: 24, padding: 10}}
            source={require('../screens/homeimages/backarrow.png')}
          />
        </TouchableOpacity>
      </View>
      {/*-------------- header complete ------------ */}
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.container}>
          <Text style={styles.logo}>Sign up</Text>

          <View style={styles.inputView}>
            <TextInput
              value={saveinput.name}
              style={styles.inputText}
              placeholder=" Inter name"
              placeholderTextColor="#C67C4E"
              onChangeText={text => handlerinput('name', text)}
            />
          </View>
          {badname == true ? (
            <Text
              style={{
                fontSize: 20,
                width: '80%',
                color: 'red',
                alignSelf: 'flex-start',
                marginLeft: responsiveWidth(11),
                marginBottom: 3,
              }}>
              please fill out this field
            </Text>
          ) : null}

          <View style={styles.inputView}>
            <TextInput
              value={saveinput.email}
              style={styles.inputText}
              placeholder="Inter email"
              placeholderTextColor="#C67C4E"
              onChangeText={text => handlerinput('email', text)}
            />
          </View>
          {bademail == true ? (
            <Text
              style={{
                fontSize: 20,
                width: '80%',
                color: 'red',
                alignSelf: 'flex-start',
                marginLeft: responsiveWidth(11),
                marginBottom: 3,
              }}>fillout email field or correct field
            </Text>
          ) : null}

          <View style={styles.inputView}>
            <TextInput
              value={saveinput.password}
              style={styles.inputText}
              placeholder=" Inter password"
              placeholderTextColor="#C67C4E"
           //   secureTextEntry={true}
              onChangeText={text => handlerinput('password', text)}
            />
          </View>
          {badpassword == true ? (
            <Text
              style={{
                fontSize: 20,
                width: '80%',
                color: 'red',
                alignSelf: 'flex-start',
                marginLeft: responsiveWidth(11),
                marginBottom: 3,
              }}>please fill out proper password
            </Text>
          ) : null}

          {/* complete fld */}
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;

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
  },
  container: {
    borderRadius: 20,

    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fb5b5a',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#313131',
    borderRadius: 25,
    height: 50,
    marginBottom: 8,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
    fontSize: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});
