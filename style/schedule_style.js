import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#ACB992',
      // alignItems: 'center',
      // justifyContent: 'center',
    },

    header: {
      flexDirection: 'row',
      marginTop: 25,
      justifyContent: 'space-between',
      height:50,
      backgroundColor: '#464E2E',
      padding:5,
    },

    header_bar:{
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
    },

    header_text:{
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize:20,
      fontWeight: 'bold',
      color: '#fff'
    },

    body: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ACB992',
    },

    content_container: {
      padding: 20,
      backgroundColor: '#E9E5D6',
      borderRadius:10,
      margin: 10,
      height:90,
      width:330,
    },
    content_container_fr:{
      textAlign:'left',
      flexDirection:'row',
      margin:3,
    },
    content_container_sr:{
      textAlign:'left',
      flexDirection:'row',
      margin:3,
    },

   
    footer: {
    },
  });
  export default styles;
  
  