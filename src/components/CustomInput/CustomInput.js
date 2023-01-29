import React from "react";
import { Controller } from "react-hook-form";
import {View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({control, rules = {}, name, placeholder}) => {
    return (  
        <View style={styles.container}>
            <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}}) => 
                <TextInput
                    value={value} 
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder} 
                    style={styles.input} 
                    />
                }
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