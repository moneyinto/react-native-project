import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Button from '../../components/Button';

export default class MyOrder extends Component {
    static navigationOptions = {
        title: "我的订单"
    };

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.navigation.getParam('type'),
            orderList: [
                {
                    productList: ["", "", "", "", "", ""]
                },
                {
                    productList: ["", "", "", "", "", ""]
                },
                {
                    productList: ["", "", "", "", "", ""]
                },
                {
                    productList: ["", "", "", "", "", ""]
                }
            ]
        }
    }

    selectType = (type) => {
        this.setState({
            type
        })
    }

    render() {
        const { type, orderList } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.tabBox}>
                    <TouchableOpacity style={styles.tabItem} onPress={() => this.selectType(0)}>
                        <Text style={{ ...styles.tabText, ...type == 0 && styles.tabActiveText }}>待支付</Text>
                        {type == 0 && <View style={styles.tabBottom}></View>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => this.selectType(1)}>
                        <Text style={{ ...styles.tabText, ...type == 1 && styles.tabActiveText }}>待发货</Text>
                        {type == 1 && <View style={styles.tabBottom}></View>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => this.selectType(2)}>
                        <Text style={{ ...styles.tabText, ...type == 2 && styles.tabActiveText }}>待收货</Text>
                        {type == 2 && <View style={styles.tabBottom}></View>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => this.selectType(3)}>
                        <Text style={{ ...styles.tabText, ...type == 3 && styles.tabActiveText }}>已完成</Text>
                        {type == 3 && <View style={styles.tabBottom}></View>}
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.orderList}>
                    {
                        orderList.map((item, i) => {
                            return <View style={styles.orderItem} key={i}>
                                <View style={styles.orderHeader}>
                                    <Text style={styles.orderNo}>23232143</Text>
                                    <Text style={styles.orderStatusText}>{['待支付', '待发货', '待收货', '待评价'][type]}</Text>
                                </View>
                                <ScrollView horizontal={true}>
                                    <View style={styles.productBox}>
                                        {
                                            item.productList.map((item, j) => {
                                                return <View style={styles.productItem} key={j}>
                                                    <Image style={styles.productImage} source={require('../home/images/product.png')} />
                                                </View>
                                            })
                                        }
                                    </View>
                                </ScrollView>
                                <View style={styles.orderCount}>
                                    <Text style={styles.orderCountText}>共2件商品 合计：￥2000</Text>
                                </View>
                                <View style={styles.orderFooter}>
                                    { type == 0 && <Button color="#888888" style={styles.refund}>取消订单</Button>}
                                    { type == 0 && <Button color="#ffffff" style={styles.pay}>立即支付</Button>}

                                    { type == 1 && <Button color="#888888" style={styles.refund}>申请退款</Button>}

                                    { type == 2 && <Button color="#888888" style={styles.refund}>查看物流</Button>}
                                    { type == 2 && <Button color="#ffffff" style={styles.pay}>确认收货</Button>}
                                </View>
                            </View>
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBox: {
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    tabItem: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: "center"
    },
    tabText: {
        fontSize: 16,
        color: "#333333"
    },
    tabActiveText: {
        color: theme.themeColor
    },
    tabBottom: {
        position: "absolute",
        width: 30,
        height: 4,
        borderRadius: 2,
        backgroundColor: theme.themeColor,
        bottom: 6
    },
    orderList: {
        flex: 1,
        backgroundColor: "#f7f7f7",
        paddingHorizontal: 20
    },
    orderItem: {
        padding: 15,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 20
    },
    orderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
    },
    orderNo: {
        fontSize: 16,
        color: "#333333"
    },
    orderStatusText: {
        fontSize: 16,
        color: theme.themeColor
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
    orderCount: {
        marginTop: 10,
        alignItems: "flex-end"
    },
    orderCountText: {
        fontSize: 16,
        color: "#333333"
    },
    orderFooter: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 5
    },
    refund: {
        borderWidth: 1,
        borderColor: "#888888",
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 16,
        marginLeft: 15
    },
    pay: {
        borderWidth: 1,
        borderColor: theme.themeColor,
        backgroundColor: theme.themeColor,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 16,
        marginLeft: 15
    }
})