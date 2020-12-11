import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import Category from './category';
import { inject, observer } from 'mobx-react';
import Adv from './adv';
import Banner from './banner';
import Tip from './tip';
import SecKill from './seckill';
import GroupBuy from './groupBuy';

@inject(({ store: { home } }) => ({ home }))
@observer
export default class Home extends Component {
    state = {
        bannerList: [],
        adv: null,
        categoryList: []
    }

    constructor(props) {
        super(props);
        this.getBanner();
    }

    getBanner = async () => {
        const { home } = this.props;
        let res = await home.getBanner(2);
        if (res.success) {
            this.setState({
                bannerList: res.data.topList,
                adv: res.data.smsAdvertisement
            })
        }
    }

    render() {
        const { bannerList, adv } = this.state;
        return (
            <View style={styles.container}>
                <Banner bannerList={bannerList} />

                <Tip />

                <Category />

                {adv && <Adv source={adv} />}

                <View style={styles.activityBox}>
                    <View style={styles.activityTop}>
                        <View style={styles.activityItem}>
                            <SecKill />
                        </View>
                        <View style={styles.activityItem}>
                            <GroupBuy />
                        </View>
                    </View>
                    <View style={styles.activityBottom}>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    activityBox: {
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    activityTop: {
        flexDirection: 'row'
    }
});