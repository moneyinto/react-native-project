import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 50) / 2;
const blockIcon = require('./images/block.png');
import { themeColor } from '../../theme';

export default class ProductList extends Component {
    state = {
        productList: ['', '', '', '', '', '', ''],
        categoryList: [
            {
                id: 1,
                name: '精选'
            },
            {
                id: 2,
                name: '服饰'
            },
            {
                id: 3,
                name: '食品'
            },
            {
                id: 4,
                name: '家居'
            },
            {
                id: 5,
                name: '个护'
            },
            {
                id: 6,
                name: '生鲜'
            }
        ],
        categoryId: 1
    }

    categorySelect = (id) => {
        this.setState({
            categoryId: id
        })
    }

    render() {
        const { productList, categoryList, categoryId } = this.state;

        const renderItem = ({ item, index }) => (
            <View style={{...styles.productItem, ...(index % 2 == 1 ? {marginLeft: 10} : {})}}>
                <Image style={styles.productImage} source={require('./images/product_1.png')} />
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
            <View>
                <View style={styles.header}>
                    <ScrollView horizontal={true} style={styles.categoryBox}>
                        {
                            categoryList.map(item => {
                                return  <TouchableOpacity style={styles.categoryItem} onPress={() => this.categorySelect(item.id)}>
                                            <Text style={{...styles.categoryTitle, ...(categoryId == item.id ? styles.categoryTitleActive : {})}}>{item.name}</Text>
                                        </TouchableOpacity>
                            })
                        }
                    </ScrollView>
                    <Image style={styles.headerIcon} source={blockIcon} />
                </View>
                <View style={styles.productBox}>
                    <FlatList
                        data={productList}
                        renderItem={renderItem}
                        numColumns={2}
                        // getItemLayout={(data, index) => ( {length: 150, offset: 150 * index, index} )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 15,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        color: '#333'
    },
    headerIcon: {
        width: 25,
        height: 25,
        marginLeft: 10
    },
    categoryBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    categoryItem: {
        marginRight: 15
    },
    categoryTitle: {
        color: '#333',
        fontSize: 18
    },
    categoryTitleActive: {
        color: themeColor
    },
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