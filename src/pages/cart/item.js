import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
import theme from '../../theme';
const checkedIcon = require('./images/checked_checkbox.png');
const unCheckedIcon = require('./images/unchecked_checkbox.png');
const disabledIcon = require('./images/disabled_checkbox.png');


export default class Item extends Component {
    isChecked = () => {
        const { product, checkedList } = this.props;
        return checkedList.findIndex(item => { return item.id == product.id }) > -1
    }
    onCheck = () => {
        const { product, checkedList, onCheckChange } = this.props;
        if (product.disabled) return;
        let index = checkedList.findIndex(item => { return item.id == product.id });
        onCheckChange(product, index);
    }
    reduce = () => {
        const { product, onValueChange } = this.props;
        if (product.num > 1 && !product.disabled) {
            onValueChange(product, product.num - 1)
        }
    }
    add = () => {
        const { product, onValueChange } = this.props;
        if (product.disabled) return;
        onValueChange(product, product.num + 1)
    }
    render() {
        const { product } = this.props;
        return (
            <View style={styles.cartBox}>
                <View style={styles.productBox}>
                    <TouchableHighlight onPress={this.onCheck}>
                        <Image style={styles.checkBox} source={product.disabled ? disabledIcon : this.isChecked() ? checkedIcon : unCheckedIcon} />
                    </TouchableHighlight>
                    <ImageBackground style={styles.productImage} source={require('../../assets/product.png')}>
                        {product.disabled && <View style={styles.disabled}><Text style={styles.disabledText}>产品已下架</Text></View>}
                    </ImageBackground>
                    <View style={styles.productContent}>
                        <View style={styles.productTitle}>
                            <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.productTitleText}>{product.name}</Text>
                        </View>
                        <View style={styles.productDesc}>
                            <Text style={styles.productDescText}>{product.desc}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.productBottom}>
                    <View style={styles.productPrice}>
                        <Text style={styles.productPriceText}>￥{product.price}</Text>
                    </View>
                    <View style={styles.productStepper}>
                        <TouchableOpacity style={styles.stepperBtn} onPress={this.reduce}>
                            <Text style={styles.stepperBtnText}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.stepperNum}>
                            <Text style={styles.stepperNumText}>{product.num}</Text>
                        </View>
                        <TouchableOpacity style={styles.stepperBtn} onPress={this.add}>
                            <Text style={styles.stepperBtnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cartBox: {
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff'
    },
    productBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5
    },
    checkBox: {
        width: 25,
        height: 25,
        borderRadius: 10
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    disabled: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(90, 90, 90, 0.5)',
        paddingVertical: 5
    },
    disabledText: {
        color: '#ffffff'
    },
    productContent: {
        flex: 1,
        height: 80,
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
    productBottom: {
        paddingTop: 10,
        paddingLeft: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productPriceText: {
        fontSize: 20,
        color: theme.themeColor
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