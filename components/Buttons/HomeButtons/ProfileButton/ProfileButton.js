import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from "../../../../config";
import { styles } from '../../../../screens/SplashScreen/styles';

export const ProfileButton= (props)=> {
    const {btnPressed}= props
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.Btn} onPress={btnPressed}>
                <Image style={styles.image} source={require('../../../../../assets/images/profile.png')}/>

            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex'
    },
    Btn:{
        flexDirection:"row",
        alignItems:'center',
       

        padding:5,
        borderRadius:5
    },
    image:{
        width:16,
        height:20,
        top:2,
        left:4

    }
})
