import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Tabs() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.tabContainer} horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={styles.tabItem} >
                    <Icon name="person-add" size={20} color="#FFF" />
                    <Text style={styles.tabText}>Indicar amigos</Text>
                </View>

                <View style={styles.tabItem} >
                    <Icon name="chat-bubble-outline" size={20} color="#FFF" />
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>

                <View style={styles.tabItem} >
                    <Icon name="arrow-downward" size={20} color="#FFF" />
                    <Text style={styles.tabText}>Depositar</Text>
                </View>

                <View style={styles.tabItem} >
                    <Icon name="arrow-upward" size={20} color="#FFF" />
                    <Text style={styles.tabText}>Transferir</Text>
                </View>

                <View style={styles.tabItem} >
                    <Icon name="lock" size={20} color="#FFF" />
                    <Text style={styles.tabText}>Bloquear cartão</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginTop: 35,
    },

    tabContainer: {
        paddingLeft: 10,
        paddingRight: 20,
    },

    tabItem: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 3,
        marginLeft: 5,
        padding: 10,
        justifyContent: 'space-between'
    },

    tabText: {
        fontSize: 13,
        color: '#FFF',
    }
});