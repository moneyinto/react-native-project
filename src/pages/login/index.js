import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import BaseInput from '../../components/BaseInput';
import Button from '../../components/Button';
import { inject, observer } from 'mobx-react';

@inject(({ store: { login } }) => ({ login }))
@observer
export default class Login extends Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: ''
        }
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    login = () => {
        const { account, password } = this.state;
        this.props.login.submit(account, password)
    }

    render() {
        const { account, password } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <InputScrollView
                    style={styles.container}
                    keyboardOffset={100}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.inputBox}>
                        <BaseInput
                            style={styles.input}
                            placeholder="请输入账号"
                            selectionColor="#888"
                            value={account}
                            onChangeText={v => this.onChangeText('account', v)}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <BaseInput
                            style={styles.input}
                            placeholder="请输入密码"
                            selectionColor="#888"
                            value={password}
                            onChangeText={v => this.onChangeText('password', v)}
                        />
                    </View>
                    <Text>{this.props.login.num}</Text>
                    <Button onPress={this.login}>登录</Button>
                </InputScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    inputBox: {
        marginHorizontal: 40,
        marginTop: 20
    },
    input: {
        color: '#444'
    }
});