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
      padding: 30,
      textAlign:'left',
      backgroundColor: '#E9E5D6',
      borderRadius:10,
    },

    input_container:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      borderWidth:0.5,
      borderRadius:5,
      paddingLeft:10,
      margin:5,
      padding:5,
    },

    footer: {
    },
    buttonContainer: {
      marginTop:10,
      color:'#362706',
    },
    textInput: {
      // borderWidth:1,
      // borderColor: '#777',
      // padding: 8,
      // margin: 10,
      paddingLeft:5,
      width:230,
    },
  });
  export default styles;
  
  