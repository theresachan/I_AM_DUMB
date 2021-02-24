import React, { Component, useEffect , useState} from 'react'
import {  View,StyleSheet,Image, Dimensions } from 'react-native'
import { Card, Text, Button, Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../config';

export default class
AlbumsScreen extends React.Component {
    static navigationOptions = {
        title: 'Albums',
    };

    constructor(){
        super();

        this.state ={
            cardName:'Some Album'
        }

        this.cardNumber = 0;
    }

    changeCardName(){
        this.setState({
            cardName: `I am new CardName ${this.cardNumber}`
        });

        this.cardNumber++
    }

      
    
    
    render(){
        const {cardName} = this.state;
    return (

        
        <View style={styles.container}>
           
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
        </View>


        <ScrollView style={styles.feedContainer}>
            {/* <Feed></Feed> */}
            <Card>
        <Card.Title>{cardName}</Card.Title>
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
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Change Card Name'
            
            onPress={() => { this.changeCardName()}} />
        </Card>

        

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
}

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



