import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from '../style/home_style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Schedule from './Schedule.js';

export default function Home({navigation}){
  const [keberangkatan,setKeberangkatan] = useState();
  const [tujuan,setTujuan] = useState();
  const [jadwal,setJadwal] = useState();
  
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.header_bar}>
              <FontAwesome5 name="bars" size={24} color="black" />
            </View >
            <Text style={styles.header_text}>Grab Flight</Text> 
            <View style={styles.header_bar}>
              <FontAwesome5 name="home" size={24} color="black" />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.content_container}>
              <Text>Lokasi Keberangkatan</Text>
              <View style={styles.input_container}>
                <FontAwesome5 name="plane-departure" size={24} color="black" />
                <TextInput 
                style={styles.textInput}
                placeholder='Masukan lokasi keberangkatan'
                underlineColorAndroid='transparent'
                onChangeText={(val)=> setKeberangkatan(val)}
                />
              </View>
              
              <Text
              style={[{marginTop:5}]}
              >Lokasi Tujuan</Text>
              <View style={styles.input_container}>
                <FontAwesome5 name="plane-arrival" size={24} color="black" />
                <TextInput 
                style={styles.textInput}
                placeholder='Masukan lokasi tujuan'
                underlineColorAndroid='transparent'
                onChangeText={(val)=> setTujuan(val)}
                />
              </View>

              <Text
              style={[{marginTop:5}]}
              >Tanggal Keberangkatan </Text>
              <View style={styles.input_container}>
                <Fontisto name="date" size={24} color="black" />
                <TextInput 
                style={styles.textInput}
                placeholder='Masukan tanggal keberangkatan'
                underlineColorAndroid='transparent'
                onChangeText={(val)=> setJadwal(val)}
                />
              </View>
              
              <View style={styles.buttonContainer}>
                <Button title='Cari' onPress={() => {navigation.navigate('Schedule',{keberangkatan : keberangkatan,tujuan : tujuan,jadwal: jadwal});}}></Button>
              </View>
            </View>
            
          </View>
    
          <View style={styles.footer}>
            <Text style={[{textAlign: 'center'}]}>
              Copyright Ihza Fajrur Rachman Hasani-119140130
            </Text>
          </View>
        </View>
  
    );
}
// export default Home;
