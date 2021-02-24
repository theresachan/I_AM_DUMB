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
    textInput:{
        marginLeft:15,
        fontSize:12,
        minHeight:45,
        flex:1
    },
    closeIcon:{
        width:13,
        height:13,
        marginRight:15
    }
})