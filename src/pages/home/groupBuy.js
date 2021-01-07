import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const imgWidth = ((screenWidth - 60) / 2 - 20) / 2;
import { themeColor } from '../../theme';

export default class GroupBuy extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>限时拼团</Text>
                </View>
                <View style={styles.subHeader}>
                    <Text style={styles.subHeaderText}>有趣好物 还包邮</Text>
                </View>
                <View style={styles.productBox}>
                    <View style={styles.productItem}>
                        <Image style={styles.productImage} source={require('./images/product.png')} />
                    </View>
                    <View style={styles.productItem}>
                        <Image style={styles.productImage} source={require('./images/product.png')} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        color: '#333'
    },
    subHeader: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    subHeaderText: {
        color: themeColor
    },
    productBox: {
        flexDirection: 'row',
        marginHorizontal: -5
    },
    productItem: {
        padding: 5
    },
    productImage: {
        width: imgWidth,
        height: imgWidth,
        borderRadius: 5
    }
});