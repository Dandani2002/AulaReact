import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ButtonCart from '../../components/ButtonCart'; 
import Header from '../../components/Header';
import Product from '../../components/Product';
import About from './About';




export default function Main() {
  const navigation = useNavigation();
 return (
 

    <SafeAreaView>
        <Product 
        name="Xbox Series X"
        description="Lorem ipsum dolor sit amet conseqt adiscipli elit. Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit."
        price="R$ 4000,00"
        />
        <ButtonCart
        onPress = {() => navigation.navigate("About")}
        />
    </SafeAreaView>

  );
}