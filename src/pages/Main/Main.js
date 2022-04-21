import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ButtonCart from '../../components/ButtonCart'; 
import Header from '../../components/Header';
import Product from '../../components/Product';
import About from './About';
import Sobre from '../../components/Sobre';




export default function Main() {
  const navigation = useNavigation();
 return (
 

    <SafeAreaView>
        <Header title="Tecladiadores"/>
        <Sobre
        />
    </SafeAreaView>

  );
}