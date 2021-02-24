import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native'
import { colors } from '../../../config'
import { styles } from "./styles";
import {useNavigation} from "@react-navigation/native"
import CountryPicker from 'react-native-country-picker-modal'

export const PhoneNumber = (props) => {
    const {phoneNumber,placeHolder,phoneNumberChanged,closeBtnClicked,pickCountry,code}=props

    
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TouchableOpacity style={styles.countryCodeContainer} onPress={pickCountry}>
                    <Text style={styles.countryCode}>{code}</Text>
                    <Text style={styles.separator}>|</Text>
                </TouchableOpacity>

                <View style={styles.phoneNumberInputWrapper}>
                    <TextInput style={styles.textInput}
                    keyboardType = 'numeric'
                     value={phoneNumber}
                      placeholder={placeHolder} onChangeText={phoneNumberChanged}  />
                 {phoneNumber.length>0? <TouchableOpacity onPress={closeBtnClicked}><Image style={styles.closeIcon} source={require('../../../../assets/images/closed.png')} /></TouchableOpacity>:null}
               </View>


                </View>
           
        </View>
    )
}

