import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const categoryIcon1 = require('../../assets/category_1.png');
const categoryIcon2 = require('../../assets/category_2.png');
const categoryIcon3 = require('../../assets/category_3.png');
const categoryIcon4 = require('../../assets/category_4.png');
const categoryIcon5 = require('../../assets/category_5.png');

export default class Category extends Component {
    state = {
        width: 0
    }

    componentWillMount() {
        this.setState({
            width: (screenWidth - 30) / 5
        })
    }

    render() {
        const { width } = this.state;
        return (
            <View style={styles.categoryBox}>
                <View style={{ ...styles.categoryItem, width }}>
                    <Image style={{width: width - 20, height: width - 20}} source={categoryIcon1} />
                    <View style={styles.categoryBottom}>
                        <Text style={styles.categoryText}>自研精选</Text>
                    </View>
                </View>
                <View style={{ ...styles.categoryItem, width }}>
                    <Image style={{width: width - 20, height: width - 20}} source={categoryIcon2} />
                    <View style={styles.categoryBottom}>
                        <Text style={styles.categoryText}>限时秒杀</Text>
                    </View>
                </View>
                <View style={{ ...styles.categoryItem, width }}>
                    <Image style={{width: width - 20, height: width - 20}} source={categoryIcon3} />
                    <View style={styles.categoryBottom}>
                        <Text style={styles.categoryText}>新品首发</Text>
                    </View>
                </View>
                <View style={{ ...styles.categoryItem, width }}>
                    <Image style={{width: width - 20, height: width - 20}} source={categoryIcon4} />
                    <View style={styles.categoryBottom}>
                        <Text style={styles.categoryText}>品牌折扣</Text>
                    </View>
                </View>
                <View style={{ ...styles.categoryItem, width }}>
                    <Image style={{width: width - 20, height: width - 20}} source={categoryIcon5} />
                    <View style={styles.categoryBottom}>
                        <Text style={styles.categoryText}>领券中心</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    categoryBox: {
        padding: 15,
        paddingBottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    categoryItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    categoryBottom: {
        marginTop: 10
    },
    categoryText: {
        fontSize: 14,
        color: '#333'
    }
});