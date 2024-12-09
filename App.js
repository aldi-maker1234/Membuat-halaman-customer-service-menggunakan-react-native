//COSTUM COMPONENT/ELEMENT
import react from "react";
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Headerku, Cardpegawai } from "./custom";
export default App=()=> {
  return(
  <ScrollView>
    <View style={{paddingTop:StatusBar.currentHeight}}>
      <Headerku />
      <Cardpegawai nama="Joseph" HP="012997392" kel="Laki-laki" imageUri="https://i.pinimg.com/736x/ea/1e/d1/ea1ed14327f20b2037fc7aea3ac523d4.jpg"  />
      <Cardpegawai nama="Rizky" HP="012912992" kel="Laki-laki" imageUri="https://i.pinimg.com/736x/d2/40/52/d24052b66db5737e6e020e5100abeb10.jpg" />
      <Cardpegawai nama="Leo" HP="0283917482" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/f0/e6/54/f0e654e56d77b4aecb90e28ec44b66a1.jpg"/>
      <Cardpegawai nama="Abdul" HP="012997392" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/8c/c8/4d/8cc84d2a32817c293cd530303ea14e78.jpg" />
      <Cardpegawai nama="Fandi" HP="012912992" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/1e/e4/40/1ee440fb871542f6cdb2032200ef725f.jpg"/>
      <Cardpegawai nama="Akmal" HP="0283917482" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/7d/8e/f4/7d8ef4943c758918490a63afa3a5d65d.jpg"/>
      <Cardpegawai nama="Pandu" HP="012997392" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/5e/97/dd/5e97dd8e1924f715fb6f59d27e43194d.jpg"/>
      <Cardpegawai nama="Jeni" HP="012912992" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/5d/e4/21/5de42102321831d0a8449877d8a63af1.jpg"/>
      <Cardpegawai nama="Clara" HP="0283917482" kel="Perempuan" imageUri ="https://i.pinimg.com/736x/d2/28/71/d22871b6c9e94e1d973663bbe1d0b276.jpg"/>
      <Cardpegawai nama="Nazwa" HP="012997392" kel="Perempuan" imageUri ="https://i.pinimg.com/736x/41/48/4e/41484e80642b9eed8f37ecd193caa3d5.jpg"/>
      <Cardpegawai nama="Adel" HP="012912992" kel="Perempuan" imageUri ="https://i.pinimg.com/736x/13/14/f3/1314f3e609ad3c514b0b2faf2ad6d577.jpg"/>
      <Cardpegawai nama="Farel" HP="0283917482" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/65/04/8a/65048a7e2c7bf0ce8842b21359429c8a.jpg"/>
      <Cardpegawai nama="Aryan" HP="012997392" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/81/c0/57/81c057057fbde1814dff143360bd39fc.jpg"/>
      <Cardpegawai nama="Galuh" HP="012912992" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/c7/9b/91/c79b9132c2758c21b6716157adb1f5d8.jpg"/>
      <Cardpegawai nama="Kianti" HP="0283917482" kel="Perempuan" imageUri ="https://i.pinimg.com/736x/c9/f7/c3/c9f7c30659edef4cbd1839f0dab7a892.jpg"/>
      <Cardpegawai nama="Jausyan" HP="012997392" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/84/e8/79/84e87977e4e5109dbe9482ba19e7bb40.jpg"/>
      <Cardpegawai nama="Aldi" HP="012912992" kel="Laki-laki" imageUri ="https://i.pinimg.com/736x/71/25/9f/71259f675bdcd3c8ce21aa2c962fe558.jpg" />
      <Cardpegawai nama="Naidyah" HP="0283917482" kel="Perempuan" imageUri="https://i.pinimg.com/736x/a3/0c/ba/a30cbaa581b0b4e92fc96e374f6e1f5d.jpg"/>
      <Cardpegawai nama="Lintang" HP="012997392" kel="Perempuan" imageUri ="https://i.pinimg.com/736x/f1/22/5d/f1225d1062455cbbc61d636671a96b23.jpg"/>
      <Cardpegawai nama="Varrel" HP="012912992" kel="Perempuan" imageUri ="https://i.pinimg.com/736x/d6/19/21/d61921822c1213ee180d3aac5d7fd1aa.jpg"/>
      <Cardpegawai nama="Zahra" HP="0283917482" kel="Perempuan" imageUri ="https://i.pinimg.com/736x/b1/90/52/b1905210765f781757ce14d96845bea8.jpg"/>
    </View>
    </ScrollView>
  );
}