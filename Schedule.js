import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styles from '../style/schedule_style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {Jadwal,Maskapai,Bandara} from '../data'
import { useRoute } from '@react-navigation/native';
import {
    ScrollView,
    FlatList,
    Image
} from 'react-native';

// class Schedule extends Component {
//     constructor(props){
//       super(props);
//       this.state={};
//     }
//     render() {
export default function Schedule({navigation,route}){
    // const {keberangkatan} = route.params;
    // const {tujuan} = route.params;
    // const {jadwal} = route.params;
    // const route = useRoute();
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
                    <View style={styles.content_container_fr}>
                        <Text style={[{marginRight:10}]}>
                        {/* {JSON.stringify(keberangkatan).replace(/"/g, '')}        -       {JSON.stringify(tujuan).replace(/"/g, '')} */}
                        </Text>
                    </View>
                    <View style={styles.content_container_sr}>
                        <MaterialIcons name="flight" size={24} color="black" />
                        <Text>
                            {/* Elang             {JSON.stringify(jadwal).replace(/"/g, '')} */}
                        </Text>
                    </View>
                </View>

                <View style={styles.content_container}>
                    <View style={styles.content_container_fr}>
                        <Text style={[{marginRight:10}]}>
                        {/* {JSON.stringify(keberangkatan).replace(/"/g, '')}        -       {JSON.stringify(tujuan).replace(/"/g, '')} */}
                        </Text>
                    </View>
                    <View style={styles.content_container_sr}>
                        <MaterialIcons name="flight" size={24} color="black" />
                        <Text>
                            {/* Elang             {JSON.stringify(jadwal).replace(/"/g, '')} */}
                        </Text>
                    </View>
                    </View>
                    <View style={styles.content_container}>
                        <View style={styles.content_container_fr}>
                            <Text style={[{marginRight:10}]}>
                            {/* {JSON.stringify(keberangkatan).replace(/"/g, '')}        -       {JSON.stringify(tujuan).replace(/"/g, '')} */}
                            </Text>
                        </View>
                        <View style={styles.content_container_sr}>
                            <MaterialIcons name="flight" size={24} color="black" />
                            <Text>
                            {/* Elang             {JSON.stringify(jadwal).replace(/"/g, '')} */}
                            </Text>
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
// function NotFound(){
//     return(
//         <Card>
//             <View style={styles.notfound}>
//                 <Image source={require('../assets/notfound.png')} style={{ width: 30, height: 30 }}/>
//             </View>
//             <View style={styles.notfound}>
//                 <Text> Result Not Found</Text>
//             </View>
//             <View style={styles.notfound}>
//                 <Text> Recheck the location or date departure</Text>
//             </View>
//         </Card>
//     );
// }

// function SearchData(){        
//     if(route.params.Berangkat === '' || route.params.Tujuan === '' || route.params.Tanggal === ''){
//             return NotFound();
//         } else {
//             const BerangkatID = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.Berangkat.toLowerCase()).bandara_id;
//             const TujuanID = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.Tujuan.toLowerCase()).bandara_id;
//             const Hasil = JADWAL.filter(id => id.bandara_id_keberangkatan.toLowerCase() === BerangkatID.toLowerCase() && id.bandara_id_kedatangan.toLowerCase() === TujuanID.toLowerCase() && id.tanggal === route.params.Tanggal.toLowerCase());

//             let findAll = (Hasil.length >= 1) ? DataFound(Hasil) : NotFound() ;

//             return findAll;
//         }
    
// }



// function DataFound (Hasil){
// return (
    
//     <FlatList
//         data = {Hasil}
//         renderItem={({item}) => (
//             <Card>
//             <View style={styles.card}>
//                 <Text style={styles.flexView}> {BANDARA.find(sub => sub.bandara_id == item.bandara_id_keberangkatan).bandara_nama}</Text>
//                 <Text style={styles.flexView}> {BANDARA.find(sub => sub.bandara_id === item.bandara_id_kedatangan).bandara_nama} </Text>
//             </View>
//             <View style={styles.card}>
//                 <View style={styles.flexdetail}>
//                     <Image source={MASKAPAI.find(sub => sub.maskapai_id === item.maskapai_id).maskapai_logo} style={{ width: 70, height: 60 }}/>
//                     <Text style={styles.flexView}> {MASKAPAI.find(sub => sub.maskapai_id === item.maskapai_id).maskapai_nama}</Text>
//                 </View>
//                 <View style={styles.flexView}>
//                     <Text style={styles.flexView}> {JADWAL.find(sub => sub.jadwal_id === item.jadwal_id).tanggal} </Text>
//                 </View>
//             </View>
//         </Card>
//         )}
//         keyExtractor={item => item.jadwal_id}
//     />
// );
//         }
// }
// export default Schedule;