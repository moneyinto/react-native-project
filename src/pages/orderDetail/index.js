import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Button from '../../components/Button';

export default class OrderDetail extends Component {
    static navigationOptions = {
        title: "订单详情"
    };

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const type = this.props.navigation.getParam('type');
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.headerBox}>
                        <View style={styles.headerTitle}>
                            <Text style={styles.headerTitleText}>{['等待买家付款', '等待商家发货', '商家已发货', '交易成功'][type]}</Text>
                        </View>
                        <View style={styles.headerSubTitle}>
                            <Text style={styles.headerSubTitleText}>{['剩余30分钟自动取消', '商家正快马加鞭为您打包', '还剩14天20时自动确认', '期待您的再次光临'][type]}</Text>
                        </View>
                    </View>
                    <View style={styles.logisticsBox}>
                        {
                            type > 1 && <View style={{...styles.addressBox, marginBottom: 20}}>
                                            <Image style={styles.addressIcon} source={require('./images/delivery.png')} />
                                            <View style={styles.addressItem}>
                                                <View style={styles.deliveryLine}>
                                                    <Text style={styles.deliveryLineText} numberOfLines={1} ellipsizeMode={'tail'}>【广东腾讯公司】正在【袋装】扫描</Text>
                                                </View>
                                                <View style={styles.deliveryTime}>
                                                    <Text style={styles.deliveryTimeText}>2019-10-10 20:10:10</Text>
                                                </View>
                                            </View>
                                        </View>
                        }
                        <View style={styles.addressBox}>
                            <Image style={styles.addressIcon} source={require('./images/address.png')} />
                            <View style={styles.addressItem}>
                                <View style={styles.addressName}>
                                    <Text style={styles.nameText}>周红</Text>
                                    <Text style={styles.phoneText}>15962456767</Text>
                                </View>
                                <View style={styles.address}>
                                    <Text style={styles.addressText} numberOfLines={1} ellipsizeMode={'tail'}>江苏省无锡市锡山区绿地香颂20栋205室</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {
                        type != 3 && <View style={styles.productBox}>
                                        <View style={styles.productItem}>
                                            <Image style={styles.productImage} source={require('../../assets/product.png')}></Image>
                                            <View style={styles.productContent}>
                                                <View style={styles.productTitle}>
                                                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.productTitleText}>住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位</Text>
                                                </View>
                                                <View style={styles.productDesc}>
                                                    <Text style={styles.productDescText}>刚开始启动的时候</Text>
                                                </View>
                                                <View style={styles.priceBox}>
                                                    <Text style={styles.priceText}>￥48</Text>
                                                    <Text style={styles.productNumText}>2件</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.productItem}>
                                            <Image style={styles.productImage} source={require('../../assets/product.png')}></Image>
                                            <View style={styles.productContent}>
                                                <View style={styles.productTitle}>
                                                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.productTitleText}>住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位</Text>
                                                </View>
                                                <View style={styles.productDesc}>
                                                    <Text style={styles.productDescText}>刚开始启动的时候</Text>
                                                </View>
                                                <View style={styles.priceBox}>
                                                    <Text style={styles.priceText}>￥48</Text>
                                                    <Text style={styles.productNumText}>2件</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                    }

                    {
                        type == 3 && <View>
                                        <View style={styles.productBox}>
                                            <View style={styles.productItem}>
                                                <Image style={styles.productImage} source={require('../../assets/product.png')}></Image>
                                                <View style={styles.productContent}>
                                                    <View style={styles.productTitle}>
                                                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.productTitleText}>住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位</Text>
                                                    </View>
                                                    <View style={styles.productDesc}>
                                                        <Text style={styles.productDescText}>刚开始启动的时候</Text>
                                                    </View>
                                                    <View style={styles.priceBox}>
                                                        <Text style={styles.priceText}>￥48</Text>
                                                        <Text style={styles.productNumText}>2件</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{...styles.footerBox, paddingHorizontal: 0}}>
                                                <Button color="#ffffff" style={styles.receiveBth}>立即评价</Button>
                                                <Button color="#888888" style={styles.lookDelivery}>申请售后</Button>
                                            </View>
                                        </View>
                                        <View style={styles.productBox}>
                                            <View style={styles.productItem}>
                                                <Image style={styles.productImage} source={require('../../assets/product.png')}></Image>
                                                <View style={styles.productContent}>
                                                    <View style={styles.productTitle}>
                                                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.productTitleText}>住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位</Text>
                                                    </View>
                                                    <View style={styles.productDesc}>
                                                        <Text style={styles.productDescText}>刚开始启动的时候</Text>
                                                    </View>
                                                    <View style={styles.priceBox}>
                                                        <Text style={styles.priceText}>￥48</Text>
                                                        <Text style={styles.productNumText}>2件</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{...styles.footerBox, paddingHorizontal: 0}}>
                                                <Button color="#888888" style={styles.lookDelivery}>追加评价</Button>
                                                <Button color="#888888" style={styles.lookDelivery}>申请售后</Button>
                                            </View>
                                        </View>
                                    </View>
                    }
                    
                    <View style={styles.cardBox}>
                        <View style={styles.expressBox}>
                            <Text style={styles.expressText}>快递</Text>
                            <Text style={styles.expressText}>包邮</Text>
                        </View>
                        <View style={styles.payTypeBox}>
                            <Text style={styles.payTypeText}>支付方式</Text>
                            <Text style={styles.payTypeText}>在线支付</Text>
                        </View>
                        <View style={styles.payBox}>
                            <Text style={styles.payTypeText}>支付金额</Text>
                            <Text style={styles.payText}>￥480</Text>
                        </View>
                    </View>
                    <View style={styles.cardBox}>
                        <View style={styles.expressBox}>
                            <Text style={styles.expressText}>订单编号</Text>
                            <Text style={styles.expressText}>1212121212121</Text>
                        </View>
                        <View style={styles.payTypeBox}>
                            <Text style={styles.payTypeText}>创建时间</Text>
                            <Text style={styles.payTypeText}>2019-20-10 10:10:10</Text>
                        </View>
                        {
                            type == 3 && <View style={{...styles.payTypeBox, paddingTop: 0}}>
                            <Text style={styles.payTypeText}>结束时间</Text>
                            <Text style={styles.payTypeText}>2019-20-10 10:10:10</Text>
                        </View>
                        }
                        <View style={styles.contactBox}>
                            <Image style={styles.contactImage} source={require('./images/contact.png')} />
                            <Text style={styles.contactText}>联系客服</Text>
                        </View>
                    </View>
                </ScrollView>
                {
                    type == 2 && <View style={styles.footerBox}>
                        <Button color="#888888" style={styles.lookDelivery}>查看物流</Button>
                        <Button color="#ffffff" style={styles.receiveBth}>确认收货</Button>
                    </View>
                }
                {
                    type == 0 && <View style={styles.footerBox}>
                        <Button color="#888888" style={styles.lookDelivery}>取消订单</Button>
                        <Button color="#ffffff" style={styles.receiveBth}>支付订单</Button>
                    </View>
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7"
    },
    headerBox: {
        backgroundColor: theme.themeColor,
        padding: 20,
        height: 120
    },
    headerTitle: {
        marginBottom: 10
    },
    headerTitleText: {
        fontSize: 18,
        fontWeight: "800",
        color: "#ffffff"
    },
    headerSubTitleText: {
        fontSize: 14,
        color: "#ffffff"
    },
    logisticsBox: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: -40,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    addressBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    addressIcon: {
        width: 40,
        height: 40,
        marginRight: 15
    },
    addressName: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    nameText: {
        fontSize: 18,
        color: "#555555",
        marginRight: 15
    },
    phoneText: {
        fontSize: 16,
        color: "#999999"
    },
    addressItem: {
        flex: 1
    },
    address: {

    },
    addressText: {
        fontSize: 16,
        color: "#555555"
    },
    productBox: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingTop: 20
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productContent: {
        flex: 1,
        height: 100,
        paddingHorizontal: 5
    },
    productTitle: {

    },
    productTitleText: {
        fontSize: 18,
        color: '#333333',
        lineHeight: 22
    },
    productDesc: {
        marginTop: 4,
        padding: 4,
        backgroundColor: '#f7f7f7'
    },
    productDescText: {
        color: '#9b9b9b'
    },
    priceBox: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    priceText: {
        fontSize: 18,
        color: theme.themeColor
    },
    productNumText: {
        color: "#666666",
        fontSize: 18
    },
    cardBox: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 20
    },
    expressBox: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    expressText: {
        color: "#666666",
        fontSize: 18
    },
    payTypeBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15
    },
    payTypeText: {
        color: "#666666",
        fontSize: 18
    },
    payBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: "#cccccc",
        paddingTop: 15
    },
    payText: {
        color: theme.themeColor,
        fontSize: 18
    },
    contactBox: {
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: "#cccccc",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    contactImage: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    contactText: {
        fontSize: 18,
        color: "#666666"
    },
    deliveryLine: {
        marginBottom: 10
    },
    deliveryLineText: {
        color: "#159ce7",
        fontSize: 18
    },
    deliveryTime: {
    },
    deliveryTimeText: {
        fontSize: 18,
        color: "#888888"
    },
    footerBox: {
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: "#ffffff",
        paddingVertical: 14,
        paddingHorizontal: 20
    },
    lookDelivery: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#888888",
        borderRadius: 18,
        marginLeft: 20
    },
    receiveBth: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: theme.themeColor,
        backgroundColor: theme.themeColor,
        borderRadius: 18,
        marginLeft: 20
    }
})