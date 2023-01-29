import React, {useState} from "react";
import { Flatlist, SafeAreaView, View, Text, StyleSheet, Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from "../../assets/images/Logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


const InputPage = () => {

    const [username, setusername] = useState('');
    const [country, setcountry] = useState('');
    const [phonebrand, setphonebrand] = useState('');
    const [phonenumber, setphonenumber] = useState('');

    const [value, setvalue] = useState([]);


    const onInsertPressed = () => {
       {/*if (username, country, phonebrand, phonenumber) {
        AsyncStorage.setItem('username', 'country', 'phonebrand', 'phonenumber', [username, country, phonebrand, phonenumber]);
        setusername([]);
        setcountry([]);
        setphonebrand([]);
        setphonenumber([]);
        Alert.alert('Data saved');
       } else {
        Alert.alert("Fill all the data");
       }*/}
    }

    const onGetPressed = () => {
      {/*AsyncStorage.getItem('username', 'country', 'phonebrand', 'phonenumber')
      .then((value) => {
        setvalue(value);
      })*/}
    }

    return (
        <SafeAreaView style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />

            <CustomInput 
            placeholder="Name" 
            value={username} 
            setValue={setusername}
            />

            <CustomInput 
            placeholder="Country" 
            value={country} 
            setValue={setcountry} 
            />

            <CustomInput 
            placeholder="Favourite Phone Brand" 
            value={phonebrand} 
            setValue={setphonebrand} 
            />

            <CustomInput 
            placeholder="Phone Number" 
            value={phonenumber} 
            setValue={setphonenumber} 
            keyboardType="numeric"
            />

            <CustomButton text="Insert" onPress={onInsertPressed} />

            <CustomButton text="Get data" onPress={onGetPressed} />

            <Text style={styles.textstyle}>
                Information
            </Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical : 20,
    },
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
    logo: {
        width: 200,
        height: 150,
        
    },
    textstyle: {
        padding: 10,
        textAlign: 'center',
    },
})

export default InputPage;