import { StyleSheet } from "react-native";
import { colors } from "../../../config";

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:colors.white,
        padding:15
    },
    logo:{
        width:80,
        height:87
    },
    logoWrapper:{
        marginTop:31,
        alignItems:'center'
    },
    title:{
        fontSize:24,
        textAlign:'center',
        marginBottom:8
    },
    subTitle:{
        fontSize:12,
        textAlign:'center',
        color:colors.subTitle,
        
        marginLeft:60,
        marginRight:60
    },
    inputWrapper:{
        marginTop:25
    },
    chooseUserName:{
        color:colors.red
    },
    btnWrapper:{
        marginTop:21
    }
})