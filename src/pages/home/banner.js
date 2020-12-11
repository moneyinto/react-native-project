import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import HttpImage from '../../components/HttpImage';
import Swiper from 'react-native-swiper';

export default class Banner extends Component {
    state = {
        swiperHeight: 0
    }

    onReady = (layout, i) => {
        i == 0 && this.setState({
            swiperHeight: layout.height
        })
    }

    render() {
        const { swiperHeight } = this.state;
        const { bannerList } = this.props;
        return (
            <View style={{height: swiperHeight}}>
                <Swiper style={styles.wrapper} height={swiperHeight}>
                    {
                        bannerList.map((item, index) => {
                            return <View style={styles.slide} key={index}>
                                        <HttpImage onReady={layout => this.onReady(layout, index)} uri={item.pic} />
                                    </View>
                        })
                    }
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide: {}
});