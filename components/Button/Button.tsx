import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './Button.style'
const Button = ({text,onpress}:any) => {
    return(
        <TouchableOpacity onPress={onpress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;