import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { inject, observer } from 'mobx-react';
import theme from '../../theme';
import Banner from './banner';
import DiscountActionSheet from './discount';
import Specifications from './select';
import { ScrollView } from 'react-native-gesture-handler';

@inject(({ store: { } }) => ({}))
@observer
export default class Detail extends Component {
    static navigationOptions = {
        title: "商品详情"
    };

    constructor(props) {
        super(props);
        this.state = {
            bannerList: [{ "pic": "https://jsyunbiao.oss-cn-beijing.aliyuncs.com/retail/images/web/20201030/1604047360210双十一.jpg" }],
            discountModalVisible: false,
            specificationsModalVisible: false
        }
    }
    render() {
        const { bannerList, discountModalVisible, specificationsModalVisible } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.content}>
                    <Banner bannerList={bannerList} />

                    <View style={styles.productTitleBox}>
                        <View style={styles.priceAndSales}>
                            <View>
                                <Text style={styles.priceText}>￥588.00</Text>
                            </View>
                            <View>
                                <Text style={styles.salesText}>销量：1023</Text>
                            </View>
                        </View>
                        <View style={styles.titleBox}>
                            <View style={styles.title}>
                                <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.titleText}>
                                    古驰（GUCCI）绚丽栀子淡香30ml古驰绚
                                </Text>
                            </View>
                            <View style={styles.shareBtn}>
                                <Image style={styles.shareIcon} source={require('./images/share_icon.png')} />
                                <Text style={styles.shareText}>分享</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => {
                        this.setState({
                            discountModalVisible: true
                        })
                    }} style={styles.discountBox}>
                        <View style={styles.discountLabel}>
                            <Text style={styles.discountLabelText}>优惠</Text>
                        </View>
                        <Image style={styles.discountIcon} source={require("./images/discount.png")} />
                        <View style={styles.discountContent}>
                            <Text style={styles.discountContentText}>优惠券领取，省钱！</Text>
                        </View>
                        <Image style={styles.rightArrow} source={require("./images/right_arrow.png")} />
                    </TouchableOpacity>

                    <View style={styles.messageBox}>
                        <View style={styles.messageLine}>
                            <View style={styles.messageLabel}>
                                <Text style={styles.messageLabelText}>保障</Text>
                            </View>
                            <View style={styles.messageBlock}>
                                <Image style={styles.messageImage} source={require("./images/detail_icon_1.png")} />
                                <Text style={styles.messageBlockText}>超值低价</Text>
                            </View>
                            <View style={styles.messageBlock}>
                                <Image style={styles.messageImage} source={require("./images/detail_icon_2.png")} />
                                <Text style={styles.messageBlockText}>超值低价</Text>
                            </View>
                            <View style={styles.messageBlock}>
                                <Image style={styles.messageImage} source={require("./images/detail_icon_3.png")} />
                                <Text style={styles.messageBlockText}>超值低价</Text>
                            </View>
                        </View>
                        <View style={{ ...styles.messageLine, marginVertical: 15 }}>
                            <View style={styles.messageLabel}>
                                <Text style={styles.messageLabelText}>快递</Text>
                            </View>
                            <View style={styles.messageBlock}>
                                <Text style={styles.messageBlockText}>免费</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                specificationsModalVisible: true
                            })
                        }} style={styles.messageLine}>
                            <View style={styles.messageLabel}>
                                <Text style={styles.messageLabelText}>规格</Text>
                            </View>
                            <View style={styles.messageBlock}>
                                <Text style={styles.messageBlockText}>H型号</Text>
                            </View>
                            <View style={styles.messageBlock}>
                                <Text style={styles.messageBlockText}>花果香调</Text>
                            </View>
                            <View style={styles.messageExtra}>
                                <Image style={styles.rightArrow} source={require("./images/right_arrow.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.evaluateBox}>
                        <View style={styles.evaluateHeader}>
                            <Text style={styles.evaluateTitle}>商品评价</Text>
                            <View style={styles.evaluateMore}>
                                <Text style={styles.evaluateMoreText}>查看全部 ></Text>
                            </View>
                        </View>
                        <View style={styles.evaluateItem}>
                            <View style={styles.evaluateTop}>
                                <Image style={styles.evaluateUserHead} />
                                <View style={styles.evaluateUserName}>
                                    <Text style={styles.evaluateUserNameText}>健康楼科技</Text>
                                </View>
                            </View>
                            <View style={styles.evaluateBottom}>
                                <Text style={styles.evaluateText} numberOfLines={2} ellipsizeMode={'tail'}>9月5日下午，由南昌飞往西昌</Text>
                            </View>
                        </View>
                        <View style={styles.evaluateItem}>
                            <View style={styles.evaluateTop}>
                                <Image style={styles.evaluateUserHead} />
                                <View style={styles.evaluateUserName}>
                                    <Text style={styles.evaluateUserNameText}>健康楼科技</Text>
                                </View>
                            </View>
                            <View style={styles.evaluateBottom}>
                                <Text style={styles.evaluateText} numberOfLines={2} ellipsizeMode={'tail'}>9月5日下午，由南昌飞往西昌</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.productFooter}>
                    <View style={styles.productFooterBlock}>
                        <Image style={styles.productFooterBlockImage} source={require("./images/customer_service.png")} />
                        <Text style={styles.productFooterBlockText}>客服</Text>
                    </View>
                    <View style={styles.productFooterBlock}>
                        <Image style={styles.productFooterBlockImage} source={require("./images/cart.png")} />
                        <Text style={styles.productFooterBlockText}>购物车</Text>
                    </View>
                    <View style={styles.productFooterRight}>
                        <View style={styles.productFooterBtns}>
                            <TouchableOpacity style={{ ...styles.productFooterBtn, backgroundColor: "#ff6300" }}>
                                <Text style={styles.productFooterBtnText}>加入购物车</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.productFooterBtn, backgroundColor: "#ff0063" }}>
                                <Text style={styles.productFooterBtnText}>立即购买</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={discountModalVisible}
                >
                    <DiscountActionSheet onClose={() => {
                        this.setState({
                            discountModalVisible: false
                        })
                    }} />
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={specificationsModalVisible}
                >
                    <Specifications onClose={() => {
                        this.setState({
                            specificationsModalVisible: false
                        })
                    }} />
                </Modal>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f7f7f7'
    },
    content: {
        flex: 1
    },
    productTitleBox: {
        padding: 15,
        backgroundColor: "#ffffff"
    },
    priceAndSales: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    priceText: {
        color: theme.themeColor,
        fontSize: 18
    },
    salesText: {
        color: "#666666",
        fontSize: 14
    },
    titleBox: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    title: {
        flex: 1
    },
    titleText: {
        fontSize: 18,
        lineHeight: 24,
        color: "#333333"
    },
    shareBtn: {
        width: 90,
        height: 40,
        flexDirection: "row",
        backgroundColor: "#f2f2f2",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: -20
    },
    shareIcon: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    shareText: {
        fontSize: 16,
        color: "#333333"
    },
    discountBox: {
        backgroundColor: "#fff",
        marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    discountLabel: {
        marginRight: 20
    },
    discountLabelText: {
        fontSize: 16,
        color: "#333333"
    },
    discountIcon: {
        width: 24,
        height: 18,
        marginRight: 8
    },
    discountContent: {
        flex: 1
    },
    discountContentText: {
        fontSize: 16,
        color: theme.themeColor
    },
    messageBox: {
        padding: 15,
        backgroundColor: "#ffffff",
        marginTop: 15
    },
    messageLine: {
        flexDirection: "row",
        alignItems: "center"
    },
    messageLabel: {
        width: 60
    },
    messageLabelText: {
        color: "#333333",
        fontSize: 16
    },
    messageBlock: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    messageImage: {
        width: 20,
        height: 20,
        marginRight: 8
    },
    messageBlockText: {
        color: "#444444",
        marginRight: 15,
        fontSize: 16
    },
    messageExtra: {
        flex: 1,
        alignItems: "flex-end"
    },
    evaluateBox: {
        backgroundColor: "#ffffff",
        marginTop: 15
    },
    evaluateHeader: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    evaluateTitle: {
        fontSize: 18,
        color: "#333333"
    },
    evaluateMore: {

    },
    evaluateMoreText: {
        fontSize: 18,
        color: theme.themeColor
    },
    evaluateItem: {
        paddingHorizontal: 15,
        marginBottom: 15
    },
    evaluateTop: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    evaluateUserHead: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 8,
        backgroundColor: "#f60000"
    },
    evaluateUserName: {},
    evaluateUserNameText: {
        fontSize: 16,
        color: "#333333"
    },
    evaluateBottom: {},
    evaluateText: {
        fontSize: 16,
        color: "#333333",
        lineHeight: 24
    },
    productFooter: {
        backgroundColor: "#ffffff",
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    productFooterBlock: {
        alignItems: "center",
        marginRight: 30
    },
    productFooterBlockImage: {
        width: 26,
        height: 26,
        marginBottom: 5
    },
    productFooterBlockText: {
        fontSize: 14,
        color: "#444444"
    },
    productFooterRight: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end"
    },
    productFooterBtns: {
        flexDirection: "row",
        overflow: "hidden",
        borderRadius: 20,
        height: 40,
        width: 240
    },
    productFooterBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    productFooterBtnText: {
        color: "#ffffff",
        fontSize: 18
    }
});