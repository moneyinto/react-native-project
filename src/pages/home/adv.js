import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import HttpImage from '../../components/HttpImage';
const screenWidth = Dimensions.get('window').width;

export default class Adv extends Component {
    render() {
        const { source } = this.props;
        return (
            <View>
                <HttpImage style={styles.advTop} uri={source.pic} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    advTop: {
        marginHorizontal: 20,
        width: screenWidth - 40
    }
});