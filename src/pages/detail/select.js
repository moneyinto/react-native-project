import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Button from '../../components/Button';

export default class Specifications extends Component {
    state = {
        list: [
            {
                name: "1花样倾慕唇膏花样倾慕唇膏"
            },
            {
                name: "2花样倾慕唇膏花样倾慕唇膏"
            },
            {
                name: "3花样倾慕唇膏花样倾慕唇膏"
            },
            {
                name: "4花样倾慕唇膏花样倾慕唇膏"
            }
        ],
        selected: 0,
        num: 1
    }
    reduce = () => {
        const { num } = this.state;
        if (num > 1) {
            this.setState({
                num: num - 1
            })
        }
    }
    add = () => {
        const { num } = this.state;
        this.setState({
            num: num + 1
        })
    }
    sure = () => {
        this.props.onClose();
    }
    render() {
        const { list, selected, num } = this.state;
        const { onClose } = this.props;
        return (
            <View style={styles.actionSheetBox}>
                <View style={{flex: 1}}></View>
                <View style={styles.actionContent}>
                    <View style={styles.productHeader}>
                        <Image style={styles.productImage} source={require("../../assets/product.png")} />
                        <View style={styles.productHeaderTitle}>
                            <View style={styles.productTop}>
                                <Text style={styles.productPriceText}>￥255</Text>
                                <Text style={styles.productText}>库存：20000</Text>
                            </View>
                            <View style={styles.productBottom}>
                                <View style={styles.productSelectView}>
                                    <Text style={styles.productText} numberOfLines={1} ellipsizeMode={'tail'}>已选：{list[selected].name}</Text>
                                </View>
                                <Text style={styles.productText}>2件</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productTitle}>
                        <Text style={styles.productTitleText}>系列</Text>
                    </View>
                    <View style={styles.specificationList}>
                        {
                            list.map((item, index) => {
                                return <View style={styles.specificationItem} key={index}>
                                            <TouchableOpacity onPress={() => {
                                                this.setState({
                                                    selected: index
                                                })
                                            }}>
                                                <Text style={{...styles.specificationText, ...(selected == index ? styles.activeText : {})}} numberOfLines={1}>{item.name}</Text>
                                            </TouchableOpacity>
                                        </View>
                            })
                        }
                    </View>
                    <View style={styles.productBuy}>
                        <Text style={styles.productBuyText}>购买数量</Text>
                        <View style={styles.productStepper}>
                            <TouchableOpacity style={styles.stepperBtn} onPress={this.reduce}>
                                <Text style={styles.stepperBtnText}>-</Text>
                            </TouchableOpacity>
                            <View style={styles.stepperNum}>
                                <Text style={styles.stepperNumText}>{num}</Text>
                            </View>
                            <TouchableOpacity style={styles.stepperBtn} onPress={this.add}>
                                <Text style={styles.stepperBtnText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button height={50} size={18} color={"#ffffff"} backgroundColor={theme.themeColor} underlayColor={"#ffd2e1"} onPress={this.sure}>确认</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    actionSheetBox: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        flex: 1
    },
    actionContent: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingTop: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    productHeader: {
        flexDirection: "row",
        paddingLeft: 20
    },
    productImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginTop: -45,
        marginRight: 15
    },
    productHeaderTitle: {
        flex: 1
    },
    productTop: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    productBottom: {
        flexDirection: "row",
        marginTop: 15
    },
    productSelectView: {
        flex: 1
    },
    productPriceText: {
        fontSize: 18,
        color: theme.themeColor
    },
    productText: {
        fontSize: 16,
        color: "#555555"
    },
    productTitle: {
        marginTop: 25
    },
    productTitleText: {
        fontSize: 18,
        color: "#333333"
    },
    specificationItem: {
       marginTop: 15,
       flexWrap: "wrap"
    },
    specificationText: {
        fontSize: 16,
        color: "#aaaaaa",
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#f2f2f2",
        borderRadius: 3
    },
    activeText: {
        backgroundColor: "#ffd6e2",
        color: theme.themeColor
    },
    productBuy: {
        marginVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    productBuyText: {
        color: "#444",
        fontSize: 18
    },
    productStepper: {
        width: 120,
        padding: 5,
        borderWidth: 1,
        borderColor: '#eeeeee',
        flexDirection: 'row',
        borderRadius: 28
    },
    stepperBtn: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#f2f2f2',
        alignItems: 'center'
    },
    stepperBtnText: {
        fontSize: 26,
        color: '#979797',
        marginTop: -4
    },
    stepperNum: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepperNumText: {
        fontSize: 18,
        color: '#333333'
    }
});