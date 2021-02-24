import React from 'react'
import { View, Text,StyleSheet,TextInput,Image, TouchableOpacity } from 'react-native'
import { styles } from "./styles";

export const OtpCode = (props) => {
    const {placeHolder,textChanged,closeBtnClicked,otpCode}=props
    return (
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
           <TextInput style={styles.textInput} keyboardType='numeric'   value={otpCode} placeholder={placeHolder} onChangeText={textChanged}  />
            {otpCode.length>0? <TouchableOpacity onPress={closeBtnClicked}><Image style={styles.closeIcon} source={require('../../../../assets/images/closed.png')} /></TouchableOpacity>:null}
          </View>
        </View>
    )
}