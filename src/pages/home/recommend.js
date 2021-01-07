import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, ScrollView } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const recommendIcon = require('./images/recommend.png');
import { themeColor } from '../../theme';

export default class Recommend extends Component {
    state = {
        productList: ['', '', '', '', '', '', '']
    }
    render() {
        const { productList } = this.state;
        return (
            <View>
                <View style={styles.header}>
                    <Image style={styles.headerIcon} source={recommendIcon} />
                    <Text style={styles.headerDesc}>每日及时更新</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.productBox}>
                        {
                            productList.map(item => {
                                return <View style={styles.productItem}>
                                            <Image style={styles.productImage} source={require('./images/product.png')} />
                                            <View style={styles.productTitle}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.productTitleText}>欧莱雅洗面奶</Text>
                                            </View>
                                            <View style={styles.productPrice}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.productPriceText}>￥1800</Text>
                                            </View>
                                        </View>
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: -10,
        marginHorizontal: -10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerIcon: {
        width: 200,
        height: 40
    },
    headerDesc: {
        color: '#999999',
        marginLeft: 20
    },
    productBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8
    },
    productItem: {
        marginRight: 10
    },
    productImage: {
        width: 90,
        height: 90,
        borderRadius: 5
    },
    productTitle: {
        marginTop: 6
    },
    productTitleText: {
        color: '#666',
        width: 90
    },
    productPrice: {
        marginTop: 4
    },
    productPriceText: {
        color: themeColor
    }
});