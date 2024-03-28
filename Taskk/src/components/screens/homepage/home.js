import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Pressable,
} from 'react-native';

import {Products} from '../../../product';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Home = () => {
  const [isvisible,setIsvisible]=useState(0)
  const navigation = useNavigation();
 
  const [categorylist, SetCategorylist] = useState([]);

  const [isactive, SetIsactive] = useState(true);
  const [allitem, setAllitem] = useState([]);
  const [capachino, setCapachino] = useState([]);
  const [macho, setMacho] = useState([]);

  const filtercategiri = () => {
    const filtered = Products.filter(item => item.category === 'cappuccino');
    setCapachino(filtered);
    setIsvisible(0)
  };
  const filterbymachiato = () => {
    const filteredbymach = Products.filter(item => item.category == 'machiato');
    setCapachino(filteredbymach);
    setIsvisible(1)
  };
  const filterbylatte = () => {
    const filteredbymach = Products.filter(item => item.category == 'latte');
    setCapachino(filteredbymach);
    setIsvisible(2)
  };
  const filterbyblackcoffe = () => {
    const filteredbymach = Products.filter(
      item => item.category == 'blackcoffe',
    );
    setCapachino(filteredbymach);
    setIsvisible(3)
  };

  const handlerpress_item = id => {
    // navigation.navigate('singleproduct')
    Alert.alert(id.toString());
    console.log(id);
  };

  useEffect(() => {
    {
      setAllitem(Products);

      const filtered = Products.filter(item => item.category === 'cappuccino');
      setCapachino(filtered);
    }
  }, []);

  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <View style={styles.empty_view}></View>

      <View style={styles.home_static}>
        <View style={styles.home_header_text}>
          <View>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Sora-Light',
                
              }}>
              Location
            </Text>
            {/* iconview */}
            <View style={{flexDirection:'row'}}>
            <Text style={{color: 'white',  height: 22,
          fontFamily:'Sora-Bold'
          }}>
              Bilzen,Tanjungbhai
            </Text>
            <Image
            style={{alignSelf:'center',marginHorizontal:5}}
            source={require('../homeimages/Arrowdown2.png')}
          />


            </View>
            
             {/* iconview */}
          </View>

          <Image
            style={styles.home_header_img}
            source={require('../homeimages/image1.png')}
          />
        </View>

        <View style={styles.search_view}>
          <Image
            style={styles.searchicon}
            source={require('../homeimages/search.png')}
          />
          <TextInput
            style={[styles.input, {}]}
            placeholder="Search coffee"
            placeholderTextColor="#989898"
          />

          <View style={styles.filterview}>
            <Image
              style={styles.filtericon}
              source={require('../homeimages/filter.png')}
            />
          </View>
        </View>
        <View>
          <Image
          style={styles.homeframe_img}
          source={require('../homeimages/frame.png')}
        />
        </View>
       
      </View>
      <ScrollView       
        style={{marginLeft: 26, padding: 1}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignSelf: 'center',
            paddingVertical: 50,
          }}>
          <TouchableOpacity onPress={filtercategiri} style={[styles.categerybtn,
       {backgroundColor:isvisible==0?'#C67C4E':'#F3F3F3'}]}>
            <Text style={[styles.category_text_item,
             {color:isvisible==0?'white':'#2F4B4E'}
            ]}>Capachino</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={filterbymachiato}
            style={[styles.categerybtn,
            {backgroundColor:isvisible==1?'#C67C4E':'#F3F3F3'}]}>
            <Text style={[styles.category_text_item,
           {color:isvisible==1?'white':'#2F4B4E'}
            ]}>Machiato</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={filterbylatte}
           style={[styles.categerybtn,
            {backgroundColor:isvisible==2?'#C67C4E':'#F3F3F3'}]}>
            <Text style={[styles.category_text_item,
         {color:isvisible==2?'white':'#2F4B4E'}
            ]}>Latte</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={filterbyblackcoffe}
            style={[styles.categerybtn,
              {backgroundColor:isvisible==3?'#C67C4E':'#F3F3F3'}]
            }>
            <Text style={[styles.category_text_item,
            {color:isvisible==3?'white':'#2F4B4E'}
            ]}>Black Coffee</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    
      <FlatList
        style={{marginTop: 0, width: "100%",}}
        contentContainerStyle={{alignItems: "center"}}
        data={capachino}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View style={{}}>
            <View style={styles.listbox}>
              <View style={styles.innerlistbox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('singleproduct', {item})}>
                  <Image
                    style={{
                      width: 158,
                      height: 135,
                      borderRadius: 16,
                      alignSelf: 'center',
                    }}
                    source={item.image}
                  />
                </TouchableOpacity>

                <Text style={styles.flatitem_name}>{item.name}</Text>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 15,
                    fontWeight: '400',
                    marginHorizontal: 10,
                    fontFamily:'Sora-Medium'
                  }}>
                  {item.subname}
                </Text>
                <View style={styles.rating_view}>
                  <Image
                    style={styles.star}
                    source={require('../homeimages/star.png')}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#FFFFFF',
                      lineHeight: 16,
                      fontWeight: '600',
                    }}>
                    {item.rating}
                  </Text>
                </View>
                <View style={styles.listbox_pricebox}>
                  <Text style={styles.price}>{item.price}</Text>

                  <View style={styles.price_increase_btn}>
                    <Text style={{color: 'white', fontSize: 25}}>+</Text>
                  </View>
                </View>
              </View>
            </View>
            </View>
          );
        }}
      />
    

    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  empty_view: {
    width: '100%',
    height: 270,
    backgroundColor: 'black',
    position: 'absolute',
  },
  home_static: {
    marginTop: 20,
  },
  home_header_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 22,
    alignItems: 'center',
  },
  search_view: {
    backgroundColor: '#313131',
    width: '88.5%',
    height: 52,
    padding: 5,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchicon: {
    width: 20,
    height: 20,
    tintColor: 'white',
    marginLeft: 5,
  },
  filtericon: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginLeft: 5,
  },

  input: {
    width: '74%',
    height: '100%',
    color: '#989898',
    fontSize: 15,
  },

  filterview: {
    height: 44,
    width: 44,
    backgroundColor: '#C67C4E',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeframe_img: {
    width: 344,
    height: 140,
    alignSelf: 'center',
    borderRadius: 16,
    marginTop: 40,
    marginBottom: 20,
  },
  categerybtn: {
    paddingHorizontal:10,
    height: 40,
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 2,
  },
  category_text_item: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
    lineHeight: 17,
    fontFamily:'Sora-Medium'
  },

  innerlistbox: {
    // width: 155,
    // height: 230,
    padding: 5,
    paddingBottom: 10,
    margin: 5,
    backgroundColor: 'white',
    shadowColor: 'balck',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 16,
    position: 'relative',
  },
  flatitem_name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F2D2C',
    lineHeight: 20,
    marginHorizontal: 10,
    textTransform: 'capitalize',
    marginVertical:5
  },
  listbox: {
    marginLeft: 0,
    justifyContent:'center',
    alignItems:'center',
  },
  listbox_pricebox: {
    flexDirection: 'row',
    marginHorizontal: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2F4B4E',
    fontFamily:'Sora-Medium'
  },
  price_increase_btn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#C67C4E',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  rating_view: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 10,
    position: 'absolute',
    marginTop: 10,
  },
  star: {
    width: 14,
    height: 14,
    tintColor: 'yellow',
  },
});
