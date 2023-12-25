import React, { useState } from 'react';
import { SafeAreaView, Text, Alert } from 'react-native'
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}:any){

    const [userName, setUserName] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);

    function handleSubmit(){

        if (!userName  || !userAge || !userMail) {
            Alert.alert('tmuscleup GYM', 'Please fill up all of the forms.')
            return;
        }
        

        const user = {
            userName,
            userAge,
            userMail
        };
        
        navigation.navigate('MemberResult', {user});

    }

    return(
        <SafeAreaView>
            <Input 
                label='Member name' 
                placeholder='Name..'
                onChangeText={setUserName}
            />
            <Input 
                label='Member Age' 
                placeholder='Age..'
                onChangeText={setUserAge}
            />
            <Input 
                label='Member E-mail' 
                placeholder='E-mail'
                onChangeText={setUserMail}
            />
            <Button text='Submit' onpress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberSign;