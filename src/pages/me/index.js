import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class Me extends Component {
    static navigationOptions = {
      header: null,
    };

    render() {
        return (
            <SafeAreaView>
                <Text>Me</Text>
            </SafeAreaView>
        )
    }
}