import React, { Component } from 'react';
import { Provider, inject, observer } from 'mobx-react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import configAppNavigator from './navigation';
import { getStorage } from './util/storage';
import * as Store from './models';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends Component {
  state = {
    AppNavigator: View,
    loadingShow: false,
    loadingText: ''
  }

  componentDidMount() {
    global.loading = {
      show: this.show,
      hide: this.hide
    }
  }

  show = (text) => {
    this.setState({
      loadingShow: true,
      loadingText: text
    })
  }

  hide = () => {
    this.setState({
      loadingShow: false
    })
  }

  async UNSAFE_componentWillMount() {
    const token = await getStorage('token');
    global.token = token;
    this.setState({
      AppNavigator: configAppNavigator(!!token)
    })
  }

  render() {
    const { AppNavigator, loadingShow, loadingText } = this.state;
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Spinner
            visible={loadingShow}
            textContent={loadingText}
            textStyle={styles.spinnerTextStyle}
          />
          <AppNavigator />
        </View>
      </Provider>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spinnerTextStyle: {
    color: '#fff'
  }
});
