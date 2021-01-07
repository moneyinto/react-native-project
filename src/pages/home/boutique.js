import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, ScrollView } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const boutiqueIcon = require('./images/boutique.png');

export default class Boutique extends Component {
    state = {
        productList: ['', '', '', '', '', '', '']
    }
    render() {
        const { productList } = this.state;
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>德哥精选</Text>
                    <Image style={styles.headerIcon} source={boutiqueIcon} />
                    <Text style={styles.headerDesc}>好产品真不贵</Text>
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
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        color: '#333'
    },
    headerIcon: {
        width: 125,
        height: 25,
        marginLeft: 15,
        marginRight: 25
    },
    headerDesc: {
        color: '#999999'
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
    }
});