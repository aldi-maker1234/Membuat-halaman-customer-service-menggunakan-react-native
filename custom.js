import React from "react";
import { View, Text, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

// Custom Component Header 
export const Headerku = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, marginHorizontal: 10, backgroundColor: '#DA6', gap:10 }}>
    <AntDesign name="customerservice" size={24} color="black" />
    <Text>Customer Service</Text>
  </View>
);

// Custom Component Card Pegawai
export const Cardpegawai = (props) => (
  <View style={{ padding: 10, borderColor: '#aaa', borderWidth: 1, borderRadius: 3, margin: 10, flexDirection: 'row', alignItems: 'center' }}>
    <Image 
      source={{ uri: props.imageUri }} 
      style={{ width: 50, height: 50, borderRadius: 50, marginRight: 10 }} 
    />
    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nama : {props.nama}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>No.HP : {props.HP}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Jenis Kelamin : {props.kel}</Text>
    </View>
  </View>  
);
