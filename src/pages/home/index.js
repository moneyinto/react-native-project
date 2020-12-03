import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'HOME'
    });
    render() {
        return (
            <SafeAreaView>
                <Text>Home1</Text>
            </SafeAreaView>
        )
    }
}