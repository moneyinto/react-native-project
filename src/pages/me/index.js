import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import ProductList from './productList';

export default class Me extends Component {
    goMyOrder = (type) => {
        this.props.navigation.navigate({
            routeName: 'MyOrder',
            params: {
                type
            },
        });
    }

    goDiscount = () => {
        this.props.navigation.navigate({
            routeName: 'Discount'
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground resizeMode="cover" style={styles.bg} source={require('./images/me_bg.png')}>
                    <View style={styles.meHeader}>
                        <View style={styles.headBox}>
                           <Image style={styles.meHead} source={require('./images/me_head.png')}></Image>
                        </View>
                        <View style={styles.meMessage}>
                            <View style={styles.meName}>
                                <Text style={styles.meNameText}>阿里巴巴</Text>
                                <Text style={styles.appTypeText}>(买家端)</Text>
                            </View>
                            <View style={styles.meAddress}>
                                <Text style={styles.addressText}>无锡</Text>
                            </View>
                        </View>
                        <Image source={require('./images/switch.png')} style={styles.switchBtn}></Image>
                    </View>
                </ImageBackground>

                <View style={styles.meBox}>
                    <TouchableOpacity style={styles.meBlock} onPress={() => this.goDiscount()}>
                        <Image style={{width: 32, height: 24, marginBottom: 9, marginTop: 3}} source={require('./images/discount_icon.png')}></Image>
                        <Text style={styles.meBlockText}>优惠券</Text>
                    </TouchableOpacity>
                    <View style={styles.meBlock}>
                        <Image style={{width: 25, height: 30, marginBottom: 6}} source={require('./images/address_icon.png')}></Image>
                        <Text style={styles.meBlockText}>收货地址</Text>
                    </View>
                    <View style={styles.meBlock}>
                        <Image style={{width: 25, height: 25, marginBottom: 8, marginTop: 3}} source={require('./images/customer_service_icon.png')}></Image>
                        <Text style={styles.meBlockText}>平台申诉</Text>
                    </View>
                </View>

                <View style={styles.orderBox}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.orderTitle}>我的订单</Text>
                        <TouchableOpacity style={styles.orderHeaderRight} onPress={() => this.goMyOrder(0)}>
                            <Text style={styles.orderLookText}>查看全部订单</Text>
                            <Image style={styles.rightArrow} source={require('./images/right_arrow.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.orderItemBox}>
                        <View style={styles.orderItem}>
                            <Image style={styles.orderIcon} source={require('./images/wait_pay_icon.png')}></Image>
                            <Text style={styles.orderStatusText}>待付款</Text>
                        </View>
                        <View style={styles.orderItem}>
                            <Image style={styles.orderIcon} source={require('./images/wait_deliver_icon.png')}></Image>
                            <Text style={styles.orderStatusText}>待发货</Text>
                            <View style={styles.statusNum}>
                                <Text style={styles.statusNumText} numberOfLines={1}>1</Text>
                            </View>
                        </View>
                        <View style={styles.orderItem}>
                            <Image style={styles.orderIcon} source={require('./images/wait_receive_icon.png')}></Image>
                            <Text style={styles.orderStatusText}>待收货</Text>
                        </View>
                        <View style={styles.orderItem}>
                            <Image style={{...styles.orderIcon, width: 24}} source={require('./images/finish_icon.png')}></Image>
                            <Text style={styles.orderStatusText}>已完成</Text>
                        </View>
                        <View style={styles.orderItem}>
                            <Image style={styles.orderIcon} source={require('./images/after_sales_icon.png')}></Image>
                            <Text style={styles.orderStatusText}>售后</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.productList}>
                    <View style={styles.productHeader}>
                        <Image style={styles.recommendIcon} source={require('./images/recommend.png')} /> 
                        <Text style={styles.recommendText}>精品推荐</Text>
                    </View>
                    <ProductList />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    bg: {
        height: 230,
        justifyContent: "center"
    },
    meHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20
    },
    headBox: {
        width: 80,
        height: 80
    },
    meHead: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    meMessage: {
        flex: 1,
        marginLeft: 15
    },
    meNameText: {
        color: "#ffffff",
        fontSize: 18
    },
    appTypeText: {
        fontSize: 16,
        color: "#ffffff",
        marginLeft: 5
    },
    meAddress: {
        marginTop: 10
    },
    meName: {
        flexDirection: "row"
    },
    addressText: {
        fontSize: 16,
        color: "#ffffff"
    },
    switchBtn: {
        width: 40,
        height: 40
    },
    meBox: {
        marginHorizontal: 20,
        marginTop: -40,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        padding: 15,
        shadowColor: "#eeeeee",
        shadowOffset: {
            width: 5,
            height: 5
        },
        flexDirection: "row"
    },
    meBlock: {
        flex: 1,
        alignItems: "center"
    },
    meBlockText: {
        fontSize: 14,
        color: "#555555"
    },
    orderBox: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        padding: 15,
        shadowColor: "#eeeeee",
        shadowOffset: {
            width: 5,
            height: 5
        },
        marginTop: 20
    },
    orderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    orderTitle: {
        fontSize: 18,
        color: "#333333"
    },
    orderHeaderRight: {
        flexDirection: "row"
    },
    orderLookText: {
        fontSize: 16,
        color: "#888"
    },
    rightArrow: {
        width: 8,
        height: 16,
        marginLeft: 5
    },
    orderItemBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    orderItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    orderIcon: {
        width: 32,
        height: 30,
        marginBottom: 8
    },
    orderStatusText: {
        color: "#666666",
        fontSize: 16
    },
    statusNum: {
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 10,
        width: 20,
        height: 20,
        backgroundColor: theme.themeColor,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "absolute",
        top: -8,
        right: 12
    },
    statusNumText: {
        color: "#ffffff",
        fontSize: 14
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