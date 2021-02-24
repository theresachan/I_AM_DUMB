import React from 'react'
import { View, Text,StyleSheet,TextInput,Image, TouchableOpacity } from 'react-native'
import { styles } from "./styles";

export const PrimaryInput = (props) => {
    const {placeHolder,textChanged,closeBtnClicked,email}=props
    return (
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
           <TextInput autoCapitalize='none' style={styles.textInput} value={email} placeholder={placeHolder} onChangeText={textChanged}  />
            {email.length>0? <TouchableOpacity onPress={closeBtnClicked}><Image style={styles.closeIcon} source={require('../../../../assets/images/closed.png')} /></TouchableOpacity>:null}
          </View>
        </View>
    )
}


