import { StyleSheet } from "react-native";
import { colors } from "../../../config";
export const styles=StyleSheet.create({
    container:{
        display:'flex',
      
    },
    btn:{
         padding:10,
          borderRadius:5,
          alignItems:'center',
        
    },
    label:{
        fontSize:12,
        textAlign:'center',
        color:colors.white
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
    })