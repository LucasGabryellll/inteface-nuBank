import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Menu from '../components/Menu';

import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Main() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <Menu />

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Icon name="attach-money" size={30} color="#666" />
                        <Icon name="visibility-off" size={30} color="#666" />
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Saldo disponível</Text>
                        <Text style={styles.description}>R$ 179.265,65</Text>
                    </View>

                    <View style={styles.cardFooter}>
                        <Text style={styles.annotation}>
                            Transferência de R$20,00 recebida de google.com hoje ás 06:00h
                        </Text>
                    </View>

                </View>
            </View>

            <Tabs />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8B10AE',
        justifyContent: 'center'
    },

    content: {
        flex: 1,
        maxHeight: 400,
        zIndex: 5
    },

    card: {
        flex: 1,
        backgroundColor: "#FFF",
        borderRadius: 4,
        margin: 16,
        height: `100%`,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30
    },

    cardContent: {
        flex: 1,
        padding: 30,
        justifyContent: 'center'
    },

    title: {
        fontSize: 13,
        color: '#997'
    },

    description: {
        fontSize: 32,
        marginTop: 3,
        color: '#333'
    },

    cardFooter: {
        padding: 30,
        backgroundColor: '#eee',
        borderRadius: 4
    },

    annotation: {
        fontSize: 13,
        color: '#333'
    }
});