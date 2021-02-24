import { StyleSheet } from "react-native";
import { colors } from "../../../config";

export const styles=StyleSheet.create({
   
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.white
    },
    logo:{
       width:200  ,
       height:200 
    },
    footer:{
     position:'absolute',
     bottom:'5%'
    },
    label:{
        textAlign:'center',
        fontWeight:'bold',
        color:colors.primary
        
    },
    subLabel:{
        fontSize:15,
        marginTop:5,
        color:colors.gray
    }
})