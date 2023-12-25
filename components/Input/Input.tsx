import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

export default function Input({label,onChangeText, placeholder}:any) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.input_container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText}/>
        </View>
    </View>
  )
}