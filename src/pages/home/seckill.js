import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, Image } from 'react-native';
import { themeColor } from '../../theme';
let timer = null;
const bg = require('./images/bg.png');
const screenWidth = Dimensions.get('window').width;
const imgWidth = ((screenWidth - 60) / 2 - 20) / 3;


export default class SecKill extends Component {
    state = {
        count: 10230,
        productList: ['','','']
    }

    constructor(props) {
        super(props);
        this.startCount();
    }

    componentWillReceiveProps() {

    }

    startCount = () => {
        clearInterval(timer);
        timer = setInterval(() => {
            const { count } = this.state;
            if (count > 0) {
                this.setState({
                    count: count - 1
                })
            }
        }, 1000);
    }

    padStart = (n) => {
        if (n.toString().length == 2) {
            return n
        } else {
            return '0' + n
        }
    }

    render() {
        const { count, productList } = this.state;
        const hour = Math.floor(count / 3600);
        const minute = Math.floor((count - hour * 3600) / 60);
        const second = count - hour * 3600 - minute * 60;
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>限时秒杀</Text>
                    <View style={styles.countBox}>
                        <View style={styles.countItem}>
                            <Text style={styles.countText}>{this.padStart(hour)}</Text>
                        </View>
                        <View style={styles.countSpace}>
                            <Text>:</Text>
                        </View>
                        <View style={styles.countItem}>
                            <Text style={styles.countText}>{this.padStart(minute)}</Text>
                        </View>
                        <View style={styles.countSpace}>
                            <Text>:</Text>
                        </View>
                        <View style={styles.countItem}>
                            <Text style={styles.countText}>{this.padStart(second)}</Text>
                        </View>
                    </View>
                </View>
                <ImageBackground source={bg} style={styles.bg}>
                    {
                        productList.map(item => {
                            return <View style={styles.productBox}>
                                        <Image style={styles.productImage} source={require('./images/product.png')} />
                                        <View>
                                            <Text style={styles.productPrice}>￥140</Text>
                                        </View>
                                        <View>
                                            <Text style={{...styles.productPrice, ...styles.originPrice}}>￥158</Text>
                                        </View>
                                    </View>
                        })
                    }
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        color: '#333'
    },
    countBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    countItem: {
        width: 22,
        height: 22,
        borderRadius: 5,
        backgroundColor: themeColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countText: {
        fontSize: 14,
        color: '#fff'
    },
    countSpace: {
        marginHorizontal: 5
    },
    bg: {
        borderRadius: 5,
        padding: 2.5,
        marginTop: 5,
        overflow: "hidden",
        resizeMode: "cover",
        justifyContent: "center",
        flexDirection: "row"
    },
    productBox: {
        padding: 2.5
    },
    productImage: {
        width: imgWidth,
        height: imgWidth,
        borderRadius: 5,
        marginBottom: 3
    },
    productPrice: {
        fontSize: 14,
        color: themeColor
    },
    originPrice: {
        textDecorationLine: 'line-through',
        color: '#999999',
        fontSize: 12
    }
});