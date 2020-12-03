import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import HttpImage from '../../components/HttpImage';
import Swiper from 'react-native-swiper'

export default class Home extends Component {
    state = {
        swiperHeight: 0
    }

    onReady = (layout) => {
        this.setState({
            swiperHeight: layout.height
        })
    }

    render() {
        const { swiperHeight } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={{height: swiperHeight}}>
                    <Swiper style={styles.wrapper} height={swiperHeight}>
                        <View style={styles.slide}>
                            <HttpImage onReady={this.onReady} uri="https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg" />
                        </View>
                        <View style={styles.slide}>
                            <HttpImage uri="https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg" />
                        </View>
                        <View style={styles.slide}>
                            <HttpImage uri="https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg" />
                        </View>
                    </Swiper>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {},
    slide: {}
});