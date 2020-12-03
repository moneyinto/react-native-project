import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from "../components/TabBarIcon";
import theme from "../theme";
import Home from "../pages/home";
import Me from "../pages/me";
import Cart from "../pages/cart";

const HomeIcon = require('./images/home.png');
const HomeSelIcon = require('./images/home_selected.png');
const CartIcon = require('./images/cart.png');
const CartSelIcon = require('./images/cart_selected.png');
const MyIcon = require('./images/me.png');
const MySelIcon = require('./images/me_selected.png');

export default createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            path: 'Home',
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        image={HomeIcon}
                        selectImage={HomeSelIcon}
                    />
                )
            })
        },
        Cart: {
            screen: Cart,
            path: 'Cart',
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '购物车',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        image={CartIcon}
                        selectImage={CartSelIcon}
                    />
                )
            })
        },
        Me: {
            screen: Me,
            path: 'Me',
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        image={MyIcon}
                        selectImage={MySelIcon}
                    />
                )
            })
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: theme.tabTintColor, //label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: "#444", //label和icon的前景色 不活跃状态下
            showLabel: true, //是否显示label，默认开启
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            style: { backgroundColor: "#ffffff" }, //tabbar的样式
            labelStyle: {
                fontSize: 14 // 文字大小
            }
        }
    }
)