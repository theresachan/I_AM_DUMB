import React from 'react'
import { View, TextInput,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import { styles } from "./styles";
export const SecondaryInput = (props) => {
    const {password,placeHolder,passwordChanged,closeBtnClicked}=props
    return (
        <View style={styles.container}>
        <View style={styles.inputWrapper}>
         <TextInput secureTextEntry={true} style={styles.textInput} value={password} placeholder={placeHolder} onChangeText={passwordChanged}  />
          {password.length>0? <TouchableOpacity onPress={closeBtnClicked}><Image style={styles.closeIcon} source={require('../../../../assets/images/closed.png')} /></TouchableOpacity>:null}
        </View>
      </View>
    )
}


