import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import theme from '../../theme';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';

export default class Discount extends Component {
    static navigationOptions = {
        title: "我的优惠券"
    };

    constructor(props) {
        super(props);
        this.state = {
            type: 0
        }
    }

    selectType = (type) => {
        this.setState({
            type
        })
    }

    render() {
        const { type } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.tabBox}>
                    <TouchableOpacity style={styles.tabItem} onPress={() => this.selectType(0)}>
                        <Text style={{ ...styles.tabText, ...type == 0 && styles.tabActiveText }}>未使用</Text>
                        {type == 0 && <View style={styles.tabBottom}></View>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => this.selectType(1)}>
                        <Text style={{ ...styles.tabText, ...type == 1 && styles.tabActiveText }}>已使用</Text>
                        {type == 1 && <View style={styles.tabBottom}></View>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => this.selectType(2)}>
                        <Text style={{ ...styles.tabText, ...type == 2 && styles.tabActiveText }}>已过期</Text>
                        {type == 2 && <View style={styles.tabBottom}></View>}
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.discountBox}>
                        <View style={styles.discountItem}>
                            <Image style={styles.productBox} source={require('../../assets/product.png')} />
                            <View style={styles.discountContent}>
                                <View style={styles.priceTitle}>
                                    <Text style={{...styles.priceText, ...(type != 0 ? {color: "#888888"} : {})}}>￥20</Text>
                                    <Text style={{...styles.discountText, ...(type != 0 ? {color: "#888888"} : {})}}>满200减20</Text>
                                </View>
                                <View style={styles.productTitle}>
                                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={{...styles.productTitleText, ...(type != 0 ? {color: "#888888"} : {})}}>住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位</Text>
                                    <Button color="#ffffff" size={13} style={{...styles.useBtn, ...(type != 0 ? {backgroundColor: "#888888"} : {})}}>{['去使用', '已使用', '已过期'][type]}</Button>
                                </View>
                                <View style={styles.discountTime}>
                                    <Text style={{...styles.discountTimeText, ...(type != 0 ? {color: "#888888"} : {})}} numberOfLines={1}>2020/10/10 - 2020/11/11</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.discountItem}>
                            <Image style={styles.productBox} source={require('../../assets/product.png')} />
                            <View style={styles.discountContent}>
                                <View style={styles.priceTitle}>
                                    <Text style={{...styles.priceText, ...(type != 0 ? {color: "#888888"} : {})}}>￥20</Text>
                                    <Text style={{...styles.discountText, ...(type != 0 ? {color: "#888888"} : {})}}>满200减20</Text>
                                </View>
                                <View style={styles.productTitle}>
                                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={{...styles.productTitleText, ...(type != 0 ? {color: "#888888"} : {})}}>住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位</Text>
                                    <Button color="#ffffff" size={13} style={{...styles.useBtn, ...(type != 0 ? {backgroundColor: "#888888"} : {})}}>{['去使用', '已使用', '已过期'][type]}</Button>
                                </View>
                                <View style={styles.discountTime}>
                                    <Text style={{...styles.discountTimeText, ...(type != 0 ? {color: "#888888"} : {})}} numberOfLines={1}>2020/10/10 - 2020/11/11</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.discountItem}>
                            <Image style={styles.productBox} source={require('../../assets/product.png')} />
                            <View style={styles.discountContent}>
                                <View style={styles.priceTitle}>
                                    <Text style={{...styles.priceText, ...(type != 0 ? {color: "#888888"} : {})}}>￥20</Text>
                                    <Text style={{...styles.discountText, ...(type != 0 ? {color: "#888888"} : {})}}>满200减20</Text>
                                </View>
                                <View style={styles.productTitle}>
                                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={{...styles.productTitleText, ...(type != 0 ? {color: "#888888"} : {})}}>住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位住在美国旧金山的两位</Text>
                                    <Button color="#ffffff" size={13} style={{...styles.useBtn, ...(type != 0 ? {backgroundColor: "#888888"} : {})}}>{['去使用', '已使用', '已过期'][type]}</Button>
                                </View>
                                <View style={styles.discountTime}>
                                    <Text style={{...styles.discountTimeText, ...(type != 0 ? {color: "#888888"} : {})}} numberOfLines={1}>2020/10/10 - 2020/11/11</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f7f7f7'
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
    discountBox: {
        marginHorizontal: 20
    },
    discountItem: {
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    productBox: {
        width: 80,
        height: 80,
        marginRight: 15
    },
    productTitleText: {
        fontSize: 16,
        color: '#333333',
        lineHeight: 22,
        flex: 1
    },
    discountContent: {
        flex: 1
    },
    priceTitle: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 5
    },
    priceText: {
        fontSize: 24,
        color: theme.themeColor,
        fontWeight: "600"
    },
    discountText: {
        fontSize: 16,
        marginLeft: 14,
        color: theme.themeColor,
        marginBottom: 3
    },
    productTitle: {
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    discountTimeText: {
        fontSize: 16,
        color: "#666666",
        flexWrap: "wrap"
    },
    useBtn: {
        marginLeft: 10,
        backgroundColor: theme.themeColor,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15
    }
});