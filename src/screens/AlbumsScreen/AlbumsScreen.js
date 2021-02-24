import React, { Component, useEffect , useState} from 'react'
import {  View,StyleSheet,Image, Dimensions } from 'react-native'
import { Card, Text, Button, Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../config';
import { useNavigation } from "@react-navigation/native";
import Feed from "../../../components/Feed";
import { HomePage } from "../HomePage";
export const 
AlbumsScreen = ({route, navigation}) => {
    const nav=useNavigation()

    useEffect(() => {
     nav.setOptions({
        headerTransparent:true,
        headerTitle:null,
         headerLeft: () => (
        <TouchableOpacity onPress={()=>navigation.goBack()}>     
        <Image
          style={{ width: 12, height: 22 ,marginLeft:15}}
          source={require("../../../assets/images/back.png")}
        />
        </TouchableOpacity>
      )})

      
    })

    const [cardName, setcardName] = useState('Some Album')
    const [submitted, setsubmitted] = useState(false)
    // const cardNameChanged=()=>{
    //      setcardName =('hey')
    // }
    const [cardNameChanged,setcardNameChanged]= useState('hey')

    
    

    return (

        
        <View style={styles.container}>
           
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
        </View>


        <ScrollView style={styles.feedContainer}>
            {/* <Feed></Feed> */}
            <Card>
        <Card.Title>{cardName}/{cardNameChanged}</Card.Title>
        <Card.Divider/>
        {/* <Card.Image source={require('../images/pic2.jpg')}> */}
            <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        {/* </Card.Image> */}
        </Card>

        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Change Card Name'
            
            onPress={() => { cardNameChanged}} />

        </ScrollView>
   <View style={styles.footer}>
       <TouchableOpacity onPress={() => {navigation.navigate('HomePage')}}>
       <Image  style={styles.icon} source={require('../../../assets/images/Home.png')} />
       </TouchableOpacity>
       {/* <Image style={styles.icon} source={require('../../../assets/images/Chat.png')} /> */}
       <TouchableOpacity onPress={() => {navigation.navigate('Links')}}>
       <Image style={styles.icon} source={require('../../../assets/images/upload.png')} />
       </TouchableOpacity>
       {/* <Image style={styles.icon} source={require('../../../assets/images/search.png')} /> */}
       <TouchableOpacity onPress={() => {navigation.navigate('Options')}}>
       
       <Image style={styles.icon} source={require('../../../assets/images/profile.png')} />
       </TouchableOpacity>
       </View>
   </View>
           
     
    )
}

export default AlbumsScreen

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    
        backgroundColor:colors.white
        
    },
    icon:{
        width:40,
        height:40

    },
    logo:{
        width:80  ,
        height:87 ,
        marginTop:31,
        alignSelf:'center'
     },
     header:{
         display:'flex',
         flexDirection:'row',
         borderBottomColor:colors.gray, 
         
         justifyContent:'center',    
         borderBottomWidth:1,

     },

     footer:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        justifyContent:'space-between',
        padding:10,
        borderTopColor:colors.gray,
        borderTopWidth:1,
        width:'100%'
    },
    feedContainer:{
        display:'flex',
        flex:1
    }
})



