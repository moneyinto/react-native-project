import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
let timer = null;

export default class SecKill extends Component {
    state = {
        count: 10230
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
        const { count } = this.state;
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
        backgroundColor: '#ff0064',
        alignItems: 'center',
        justifyContent: 'center'
    },
    countText: {
        fontSize: 14,
        color: '#fff'
    },
    countSpace: {
        marginHorizontal: 5
    }
});