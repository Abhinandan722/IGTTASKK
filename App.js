import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Entryscreen from './src/components/entryscreen';
import Home from './src/components/screens/homepage/home';
import Single_product from './src/components/screens/homepage/single_product';
import Orderpage from './src/components/screens/homepage/orderpage';
import Login from './src/components/log_sign_screen/login';
import Signup from './src/components/log_sign_screen/signup';
import Profilescr from './src/components/screens/homepage/profilescr';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="entryscreen"
            component={Entryscreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="singleproduct"
            component={Single_product}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="orderpage"
            component={Orderpage}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="signup"
            component={Signup}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="profile"
            component={Profilescr}
             options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
