import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 50) / 2;
import { themeColor } from '../../theme';

export default class ProductList extends Component {
    state = {
        productList: ['', '', '', '', '', '', '']
    }

    render() {
        const { productList } = this.state;

        const renderItem = ({ item, index }) => (
            <View style={{...styles.productItem, ...(index % 2 == 1 ? {marginLeft: 10} : {})}}>
                <Image style={styles.productImage} source={require('../cart/images/product_1.png')} />
                <View style={styles.productTitle}>
                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.productTitleText}>大自然的味道炫酷的设计风格无语伦比超低</Text>
                </View>
                <View style={styles.productPrice}>
                    <View><Text style={styles.productPriceText}>￥120.00</Text></View>
                    <View><Text style={styles.originProductPriceText}>￥180.00</Text></View>
                </View>
                <View style={styles.buyBox}>
                    <Text style={styles.buyText}>99人付款</Text>
                </View>
            </View>
        );

        return (
            <View style={styles.productBox}>
                <FlatList
                    data={productList}
                    renderItem={renderItem}
                    numColumns={2}
                    // getItemLayout={(data, index) => ( {length: 150, offset: 150 * index, index} )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    productBox: {
        marginTop: 8
    },
    productItem: {
        width: boxWidth,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden'
    },
    productImage: {
        width: boxWidth,
        height: boxWidth
    },
    productTitle: {
        marginTop: 6
    },
    productTitleText: {
        color: '#666',
        width: boxWidth - 20,
        marginHorizontal: 10,
        lineHeight: 20
    },
    productPrice: {
        marginVertical: 6,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    productPriceText: {
        fontSize: 14,
        color: themeColor
    },
    originProductPriceText: {
        textDecorationLine: 'line-through',
        color: '#999999',
        fontSize: 14,
        marginLeft: 10
    },
    buyBox: {
        marginHorizontal: 10,
        marginBottom: 10
    },
    buyText: {
        color: '#999999',
        fontSize: 12
    }
});