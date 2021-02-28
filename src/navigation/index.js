import React from 'react';
import { createAppContainer } from 'react-navigation';
import { View } from 'react-native';
import Login from "../pages/login";
import Detail from "../pages/detail";
import theme from '../theme';
import MainTabNavigator from './MainTabNavigator';
import { createStackNavigator } from 'react-navigation-stack';
import MyOrder from '../pages/myOrder';
import OrderDetail from '../pages/orderDetail';

const defaultBigTitleHeaderStyle = {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    shadowColor: 'transparent',
};

export default (isLogin) => {
    const StackRoot = createStackNavigator(
        {
            Main: {
                screen: MainTabNavigator,
                navigationOptions: () => ({
                    headerShown: false
                })
            },
            Login: {
                screen: Login
            },
            Detail: {
                screen: Detail,
                navigationOptions: () => ({
                    headerTitleStyle: {
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }
                })
            },
            MyOrder: {
                screen: MyOrder,
                navigationOptions: () => ({
                    headerTitleStyle: {
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }
                })
            },
            OrderDetail: {
                screen: OrderDetail,
                navigationOptions: () => ({
                    headerTitleStyle: {
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }
                })
            }
        },

        {
            initialRouteName: !isLogin ? 'Main' : 'Login',
            defaultNavigationOptions: {
                headerBackTitle: null,
                headerTruncatedBackTitle: null,
                headerTintColor: theme.tintColor,
                headerTitleStyle: {
                    flex: 1,
                    color: '#000',
                    alignSelf: 'center',
                    justifyContent: 'center'
                },
                headerRight: () => <View />
            },
            // mode: "card", // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
            headerMode: "screen", // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        }
    )
    return createAppContainer(StackRoot);
}