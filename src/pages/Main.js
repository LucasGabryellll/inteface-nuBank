import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Menu from '../components/Menu';

import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';

export default function Main() {
    let offset = 0;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    );

    function onHandlerStateChange(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if (translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            };

            Animated.timing(translateY, {
                toValue: opened ? 380: 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    };

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <Menu translateY={translateY} />

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >

                    <Animated.View style={[
                        styles.card,
                        {
                            transform: [
                                {
                                    translateY: translateY.interpolate(
                                        {
                                            inputRange: [-350, 0, 380],
                                            outputRange: [-50, 0, 380],
                                            extrapolate: 'clamp',
                                        }),
                                }
                            ]
                        }]}>
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
                    </Animated.View>
                </PanGestureHandler>

            </View>

            <Tabs translateY={translateY} />
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
        top: 0,
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
        borderRadius: 5,

    },

    annotation: {
        fontSize: 13,
        color: '#333'
    }
});