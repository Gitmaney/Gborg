import React from "react";
import {View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue , placeholder}) => {
    return (  
        <View style={styles.container}>
            <TextInput
            value={value} 
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 5,
        backgroundColor: 'white',
        width: 250,
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 5,
        marginVertical: 5,
        fontSize: 25,
        
    },
    input:{
        padding: 15,
        width: 250,
    },
})

export default CustomInput ;