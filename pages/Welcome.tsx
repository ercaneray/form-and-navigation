import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";


function Welcome({navigation}:any){

    function goToMemberSign(){
        navigation.navigate('MemberSign')
    }
    function goToLogin(){
        navigation.navigate('LoginScreen')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>tmuscleup GYM</Text>
            <Button text="Sign up" onpress={goToMemberSign}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin : 10
    }
})

export default Welcome;