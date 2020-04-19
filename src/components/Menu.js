import React from 'react';

import Icon from '@expo/vector-icons/MaterialIcons';
import { QRCode } from 'react-native-custom-qr-codes-expo';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';

export default function Menu({ translateY }) {
    return (
        <Animated.ScrollView
            style={[
                styles.container,
                {
                    opacity: translateY.interpolate({
                        inputRange: [0, 150],
                        outputRange: [0, 1],
                    }),
                },
            ]}
            showsVerticalScrollIndicator={false}>

            <View style={styles.code}>
                <QRCode
                    content="https://nubank.com.br"
                    size={80}
                    color="#8B10AE"
                    backgroundColor="#FFF"
                />
            </View>

            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <Text style={styles.navText}>Me ajuda</Text>
                </View>

                <View style={styles.navItem}>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <Text style={styles.navText}>Perfil</Text>
                </View>

                <View style={styles.navItem}>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <Text style={styles.navText}>Configurar cartão</Text>
                </View>

                <View style={styles.navItem}>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <Text style={styles.navText}>configurações do app</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.singOutButton} onPress={() => { }} >
                <Text style={styles.singOutButtonText}>Sair do app</Text>
            </TouchableOpacity>
        </Animated.ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        margin: 11
    },

    code: {
        backgroundColor: '#FFF',
        padding: 10,
        alignSelf: 'center'
    },

    nav: {
        marginTop: 30,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255, 255, 255, 0.8)'
    },

    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255, 255, 255, 0.8)'
    },

    navText: {
        fontSize: 15,
        color: '#FFF',
        marginLeft: 20
    },

    singOutButton: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 15
    },

    singOutButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 13
    }
});