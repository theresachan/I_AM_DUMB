import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity ,Image} from 'react-native'
import { colors } from "../../../../config";
export const GoogleLogin = (props) => {
    const {btnPressed}=props
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.Btn} onPress={btnPressed} >
                <Image style={styles.image} source={require('../../../../../assets/images/google.png')}  />
                <Text style={styles.subLabel}>Sign In with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export const styles=StyleSheet.create({
    container:{
        display:'flex'
    },
    Btn:{
      flexDirection:"row"  ,
      alignItems:'center',
      borderWidth:1,
    
      padding:5,
      borderRadius:5
    },
    image:{
        width:21,
        height:21
    },
    subLabel:{
        fontSize:12
    }
})