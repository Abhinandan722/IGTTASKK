import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Login = () => {
  const navigation = useNavigation();
  const [bademail, setBademail] = useState(false);
  const [badpassword, setBadpassword] = useState(false);

  const [saveinput, SetSaveinput] = useState({
    email: '',
    password: '',
  });
  const handleLogin  =async () => {
    if (saveinput.email == ''||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(saveinput.email) ) {
      setBademail(true);
    } else {
      setBademail(false);
      if (saveinput.password == ''||
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{6,}/.test(saveinput.password)) {
        setBadpassword(true);
      } else {
        setBadpassword(false);
        // login token store in asyc storege----------------------------------------------------------
        try {
             const response = await axios.post(
             'https://book-store-backend-ru34.onrender.com/api/user/login',saveinput)

              console.log("this is response",response.data)
             const apitoken= response.data;
             await AsyncStorage.setItem('apitoken',apitoken)
             const get= await AsyncStorage.getItem('apitoken')
             console.log("this is token by get asy storege= ",get)
          console.log('login in successful', response.data);
          SetSaveinput({ email: '', password: '' });
          Alert.alert('Login successful');
          navigation.navigate('home');
        } catch (error) {
          console.log(error);
          Alert.alert('Please enter correct email or password');
        }
   // login token store in asyc storege----------------------------------------------------------
        
        // try{
        //   const response = await axios.post(
        //      'https://book-store-backend-ru34.onrender.com/api/user/login',saveinput)
        //      const apitoken= response.data;
        //      await AsyncStorage.setItem('apitoken',apitoken)
        // }

        // axios
        //   .post(
        //     'https://book-store-backend-ru34.onrender.com/api/user/login',saveinput)
        //   .then(res => {
        //     console.log('login in successfull', res.data);
        //     Alert.alert('login successfull');
        //     navigation.navigate('home');
        //   })
        //   .catch(err => {
        //     console.log(err);
        //     Alert.alert('please inter correct email or password');
        //   });
        // console.log(saveinput.email);
        // console.log(saveinput.password);
      }
    }
  };

  const handlerinput = (name, value) => {
    SetSaveinput({...saveinput, [name]: value});
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <View style={styles.or_header_view}>
        <TouchableOpacity
          onPress={() => navigation.navigate('entryscreen')}
          style={{alignSelf: 'center'}}>
          <Image
            style={{width: 24, height: 24, padding: 10}}
            source={require('../screens/homeimages/backarrow.png')}
          />
        </TouchableOpacity>
      </View>
      {/*-------------- header complete------------ */}

      <View style={styles.container}>
        <Text style={styles.logo}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            value={saveinput.email}
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="white"
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
            }}>
            please fill out email field
          </Text>
        ) : null}

        <View style={styles.inputView}>
          <TextInput
            value={saveinput.password}
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="white"
            //   secureTextEntry
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
            }}>
            please fill out password field
          </Text>
        ) : null}

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
  container: {
    borderRadius: 20,

    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#313131',
    borderRadius: 25,
    height: 50,
    marginBottom: 5,
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
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});
