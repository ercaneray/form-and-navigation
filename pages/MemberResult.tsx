import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

function MemberResult({route}:any) {
    const {user} = route.params;
    return(
        <SafeAreaView>
            <Text style={styles.message}>Sign up complete!</Text>
            <View style={{borderWidth:1}}/>
            <Text style={styles.label}>Member name: {user.userName}</Text>
            <Text style={styles.label}>Member age: {user.userAge}</Text>
            <Text style={styles.label}>Member e-mail: {user.userMail}</Text>
            <View style={{borderWidth:1}}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
    },
    message: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default MemberResult;