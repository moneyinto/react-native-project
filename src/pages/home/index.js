import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import HttpImage from '../../components/HttpImage';

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <HttpImage uri="https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg" />
            </SafeAreaView>
        )
    }
}