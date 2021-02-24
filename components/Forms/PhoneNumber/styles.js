import { StyleSheet } from "react-native";
import { colors } from "../../../config";
export const styles=StyleSheet.create({
    container:{
        display:'flex'
    },
    inputWrapper:{
        backgroundColor:colors.secondary,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
       
    },
    countryCode:{
        color:colors.blue
    },
    separator:{
        color:colors.subTitle,
        marginLeft:5,
        marginRight:5
    },
    countryCodeContainer:{
        flexDirection:'row',
        marginLeft:15
    },
    closeIcon:{
        width:13,
        height:13,
        marginRight:15
    },
    phoneNumberInputWrapper:{
        minHeight:45,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1
    },
 
})