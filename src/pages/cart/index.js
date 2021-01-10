import React, { Component } from 'react';
import { View, Text, SafeAreaView, ImageBackground, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Item from './item';
import theme from '../../theme';
import ProductList from './productList';
const bg = require('./images/bg.png');
const checkedIcon = require('./images/checked_checkbox.png');
const unCheckedIcon = require('./images/unchecked_checkbox.png');

export default class Cart extends Component {
    state = {
        cartList: [
            {
                id: 1,
                name: '住在美国旧金山的两位设计师',
                desc: '刚开始启动的时候',
                num: 1,
                price: 20,
                disabled: true
            },
            {
                id: 2,
                name: '住在美国旧金山的两位设计师',
                desc: '刚开始启动的时候',
                num: 1,
                price: 30,
                disabled: false
            },
            {
                id: 3,
                name: '住在美国旧金山的两位设计师',
                desc: '刚开始启动的时候',
                num: 1,
                price: 30,
                disabled: false
            }
        ],
        checkedList: []
    }
    onCheckChange = (product, index) => {
        let checkedList = this.state.checkedList;
        if (index == -1) {
            checkedList.push(product)
        } else {
            checkedList.splice(index, 1)
        }
        this.setState({
            checkedList
        })
    }
    onValueChange = (product, num) => {
        const { cartList } = this.state;
        let index = cartList.findIndex(item => { return item.id == product.id });
        cartList[index].num = num;
        this.setState({
            cartList
        })
    }
    isAllChecked = () => {
        return this.state.checkedList.length > 0 && this.state.cartList.filter(item => { return !item.disabled }).length == this.state.checkedList.length
    }
    countPrice = () => {
        let price = 0;
        this.state.checkedList.map(item => {
            price = price + item.price * item.num
        })
        return price;
    }
    checkAll = () => {
        let checkedList = [];
        if (!this.isAllChecked()) {
            checkedList = this.state.cartList.filter(item => { return !item.disabled })
        }
        this.setState({
            checkedList
        })
    }
    render() {
        const { cartList, checkedList } = this.state;
        return (
            <ImageBackground source={bg} imageStyle={styles.bgImage} style={styles.bg}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <View><Text style={styles.headerText}>共计5件宝贝</Text></View>
                        <View><Text style={styles.headerText}>完成</Text></View>
                    </View>
                    <ScrollView style={styles.container}>
                        {
                            cartList.map(item => {
                                return <Item checkedList={checkedList} product={item} onValueChange={this.onValueChange} onCheckChange={this.onCheckChange} />
                            })
                        }
                        <View style={styles.productList}>
                            <View style={styles.productHeader}>
                                <Image style={styles.recommendIcon} source={require('./images/recommend.png')} /> 
                                <Text style={styles.recommendText}>精品推荐</Text>
                            </View>
                            <ProductList />
                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={this.checkAll}>
                            <Image style={styles.checkBox} source={this.isAllChecked() ? checkedIcon : unCheckedIcon} /> 
                        </TouchableOpacity>
                        <Text style={styles.allCheckedText}>全选</Text>
                        <View style={styles.footerContent}>
                            <Text style={styles.allPriceText}>合计：</Text>
                            <Text style={styles.priceText}>￥{this.countPrice()}</Text>
                        </View>
                        <TouchableOpacity style={styles.payBtn}>
                            <Text style={styles.payBtnText}>结算</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    bgImage: {
        height: 160,
        alignItems: 'center'
    },
    header: {
        paddingTop: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#ffffff',
        fontSize: 16
    },
    container: {
        flex: 1
    },
    footer: {
        padding: 15,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    allCheckedText: {
        marginLeft: 10,
        color: '#555555',
        fontSize: 18
    },
    checkBox: {
        width: 25,
        height: 25,
        borderRadius: 10
    },
    footerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    allPriceText: {
        fontSize: 18,
        color: '#555555'
    },
    priceText: {
        fontSize: 18,
        color: theme.themeColor
    },
    payBtn: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.themeColor,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    payBtnText: {
        color: '#ffffff',
        fontSize: 18
    },
    productList: {
        marginTop: 40,
        marginHorizontal: 20
    },
    productHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    recommendIcon: {
        width: 26,
        height: 26,
        marginRight: 10
    },
    recommendText: {
        fontSize: 20,
        color: '#ff1747'
    }
});