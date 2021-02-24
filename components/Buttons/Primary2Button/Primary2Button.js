import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
export const Primary2Button = (props) => {
    const {label,btnPressed}=props
    return (
        
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3172d3', '#4092d0', '#57bccb']} style={styles.linearGradient}>
             <TouchableOpacity onPress={btnPressed} style={styles.btn}><Text style={styles.label}>{label}</Text></TouchableOpacity>
        </LinearGradient>
      
    )
}

