import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Entryscreen from './src/components/entryscreen';
import Home from './src/components/screens/homepage/home';
import Single_product from './src/components/screens/homepage/single_product';
import Orderpage from './src/components/screens/homepage/orderpage';

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
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
