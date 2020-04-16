import React from 'react';

import Icon from '@expo/vector-icons/MaterialIcons';

import { View, Text, StyleSheet, Image } from 'react-native';  

import logo from '../assets/Nubank_Logo.png';

export default function Header() {
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={logo} />
                <Text style={styles.title}>Lucas</Text>
            </View>
            <Icon name="keyboard-arrow-down" size={25} color="#FFf" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10
    },

    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7
    },

    title: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 8
    },
});