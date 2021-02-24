
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { colors } from "../config";



export default function Feed() {
    return (
        <View style={styles.container}>
            <View style = {styles.headerWrapper}>
                <View style ={styles.headerLeftWrapper}>
                <Image style={styles.profileThumb} source={require('../assets/images/darlene.png')}></Image>
                <Text style={styles.headerTitle}>Darlene Steward</Text>
            </View>
                <Image style={styles.icon} source={require('../assets/images/dots.png')} />
            </View>
            <View>
            <Image style={styles.feedImage} source={require('../assets/images/escalator.jpg')} />
            </View>
                 <View style={styles.feedImageFooterLeftWrapper}>
                    <View style={styles.feedImageFooter}>
                    <Image style={styles.icon} source={require('../assets/images/hearticon.png')} />
                    <Image style={styles.icon} source={require('../assets/images/comment.png')} />
                    <Image style={styles.icon} source={require('../assets/images/forward.jpg')} />
                </View>
            <View style={styles.underLine} />

            
            
            </View>
            <View>
                <Text>footer</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        display:"flex",
    },
    profileThumb:{
        width:50,
        height:50,
        borderRadius:50

    },
    headerWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    icon:{
        width:30,
        height:30,
        opacity:0.5

    },
    headerLeftWrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    headerTitle:{
        fontSize:18,
        fontWeight:'700',
       
    },
    feedImage:{
        width:'100%'
    },

    feedImageFooter:{
        width:'70%',
        padding:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    feedImageFooterLeftWrapper:{
        flexDirection:'row'
    },
    underLine:{
        height:10,
        backgroundColor:colors.gray

    }


    })
