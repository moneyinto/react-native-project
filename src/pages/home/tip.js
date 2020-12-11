import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Tip extends Component {
    render() {
        return (
            <View style={styles.tipBox}>
                <View style={styles.tipItem}>
                    <Image style={styles.tipIcon} source={require('./images/tip_1.png')} /> 
                    <View><Text style={styles.tipText}>超值低价</Text></View>
                </View>
                <View style={styles.tipItem}>
                    <Image style={styles.tipIcon} source={require('./images/tip_2.png')} /> 
                    <View><Text style={styles.tipText}>售后无忧</Text></View>
                </View>
                <View style={styles.tipItem}>
                    <Image style={styles.tipIcon} source={require('./images/tip_3.png')} />
                    <View><Text style={styles.tipText}>正品保证</Text></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tipBox: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10
    },
    tipItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tipIcon: {
        width: 18,
        height: 18,
        marginRight: 5
    },
    tipText: {
        color: '#888'
    }
});