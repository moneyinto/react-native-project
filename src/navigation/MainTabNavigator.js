import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from "../components/TabBarIcon";
import theme from "../theme";
import Home from "../pages/home";
import Me from "../pages/me";

const HomeNorIcon = require('./images/tab_icon_home_nor.png');
const HomeSelIcon = require('./images/tab_icon_home_sel.png');
const MyNorIcon = require('./images/tab_icon_my_nor.png');
const MySelIcon = require('./images/tab_icon_my_sel.png');

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
                        image={HomeNorIcon}
                        selectImage={HomeSelIcon}
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
                        image={MyNorIcon}
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