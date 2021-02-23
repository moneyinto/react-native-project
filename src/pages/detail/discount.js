import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import theme from '../../theme';

export default class DiscountActionSheet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onClose } = this.props;
        return (
            <View style={styles.actionSheetBox}>
                <View style={{flex: 1}}></View>
                <View style={styles.actionContent}>
                    <View style={styles.actionHeader}>
                        <View style={styles.actionTitle}>
                            <Text style={styles.actionTitleText}>优惠券</Text>
                        </View>
                        <TouchableOpacity style={styles.closeBtn} onPress={() => {
                            onClose();
                        }}>
                            <Image style={styles.closeIcon} source={require("./images/close.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.discountTitle}>
                        <Text style={styles.discountTitleText}>可领取的优惠券</Text>
                    </View>
                    <View style={styles.discountList}>
                        <View style={styles.discountItem}>
                            <View style={styles.discountItemLeft}>
                                <View style={styles.discountPrice}>
                                    <Text style={styles.discountPriceText}>100</Text>
                                    <Text style={styles.discountPriceUnitText}>元</Text>
                                </View>
                                <View style={styles.discountCondition}>
                                    <Text style={styles.discountConditionText}>满288元可用</Text>
                                </View>
                                <View style={styles.discountCount}>
                                    <Text style={styles.discountCountText}>限领取10张</Text>
                                </View>
                            </View>
                            <View style={styles.discountItemSpace}>
                                <View style={styles.discountItemSpaceTop}></View>
                                <View style={styles.discountItemSpaceMiddle}>
                                    <View style={styles.discountItemSpaceMiddleLine}></View>
                                </View>
                                <View style={styles.discountItemSpaceBottom}></View>
                            </View>
                            <View style={styles.discountItemRight}>
                                <View style={styles.discountContent}>
                                    <View style={styles.discountContentTitle}>
                                        <Text style={styles.discountContentTitleText} numberOfLines={2} ellipsizeMode={'tail'}>创建保真度高可低的时刻噶神鼎飞丹砂</Text>
                                    </View>

                                    <TouchableOpacity style={styles.getBtn}>
                                        <Text style={styles.getBtnText}>领取使用</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.discountContentTime}>
                                    <Text style={styles.discountContentTimeText} numberOfLines={1}>2020/10/10-2020/11/11</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.discountItem}>
                            <View style={styles.discountItemLeft}>
                                <View style={styles.discountPrice}>
                                    <Text style={styles.discountPriceText}>100</Text>
                                    <Text style={styles.discountPriceUnitText}>元</Text>
                                </View>
                                <View style={styles.discountCondition}>
                                    <Text style={styles.discountConditionText}>满288元可用</Text>
                                </View>
                                <View style={styles.discountCount}>
                                    <Text style={styles.discountCountText}>限领取10张</Text>
                                </View>
                            </View>
                            <View style={styles.discountItemSpace}>
                                <View style={styles.discountItemSpaceTop}></View>
                                <View style={styles.discountItemSpaceMiddle}>
                                    <View style={styles.discountItemSpaceMiddleLine}></View>
                                </View>
                                <View style={styles.discountItemSpaceBottom}></View>
                            </View>
                            <View style={styles.discountItemRight}>
                                <View style={styles.discountContent}>
                                    <View style={styles.discountContentTitle}>
                                        <Text style={styles.discountContentTitleText} numberOfLines={2} ellipsizeMode={'tail'}>创建保真度高可低的时刻噶神鼎飞丹砂</Text>
                                    </View>

                                    <TouchableOpacity style={styles.getBtn}>
                                        <Text style={styles.getBtnText}>领取使用</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.discountContentTime}>
                                    <Text style={styles.discountContentTimeText} numberOfLines={1}>2020/10/10-2020/11/11</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    actionSheetBox: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        flex: 1
    },
    actionContent: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 15,
        paddingBottom: 50,
        paddingTop: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    actionHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    actionTitle: {
        flex: 1,
        paddingLeft: 26,
        alignItems: "center"
    },
    actionTitleText: {
        fontSize: 18,
        color: "#444444"
    },
    closeBtn: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: "#f4f4f4",
        alignItems: "center",
        justifyContent: "center"
    },
    closeIcon: {
        width: 12,
        height: 12
    },
    discountTitle: {
        marginBottom: 15,
        marginTop: 15
    },
    discountTitleText: {
        fontSize: 16,
        color: "#888888"
    },
    discountList: {},
    discountItem: {
        flexDirection: "row",
        backgroundColor: "#fff4f2",
        marginBottom: 15
    },
    discountItemLeft: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.themeColor,
        paddingLeft: 10,
        width: 120,
        height: 100,
        justifyContent: "center"
    },
    discountItemSpace: {
        alignItems: "center",
        height: 100,
        width: 20,
        overflow: "hidden"
    },
    discountItemSpaceMiddle: {
        flex: 1,
        width: 1,
        overflow: "hidden"
    },
    discountItemSpaceMiddleLine: {
        flex: 1,
        borderWidth: 1,
        width: 4,
        borderColor: theme.themeColor,
        borderStyle: "dashed",
        position: "relative",
        left: -3
    },
    discountItemSpaceTop: {
        width: 20,
        height: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: theme.themeColor,
        marginTop: -10,
        backgroundColor: "#ffffff"
    },
    discountItemSpaceBottom: {
        width: 20,
        height: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: theme.themeColor,
        marginBottom: -10,
        backgroundColor: "#ffffff"
    },
    discountItemRight: {
        borderColor: theme.themeColor,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flex: 1,
        justifyContent: "center",
        paddingLeft: 10
    },
    discountPrice: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    discountPriceText: {
        fontSize: 24,
        fontWeight: "600",
        color: theme.themeColor
    },
    discountPriceUnitText: {
        fontSize: 14,
        fontWeight: "600",
        color: theme.themeColor
    },
    discountCondition: {
        alignItems: "center",
        marginVertical: 5
    },
    discountConditionText: {
        fontSize: 16,
        color: theme.themeColor
    },
    discountCount: {
        alignItems: "center"
    },
    discountCountText: {
        fontSize: 14,
        color: theme.themeColor
    },
    discountContent: {
        marginTop: 15,
        flex: 1,
        flexDirection: "row"
    },
    discountContentTitle: {
        flex: 1
    },
    discountContentTitleText: {
        fontSize: 16,
        color: "#444444"
    },
    discountContentTime: {
        marginBottom: 15
    },
    discountContentTimeText: {
        fontSize: 14,
        color: theme.themeColor
    },
    getBtn: {
        width: 80,
        height: 28,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.themeColor,
        marginHorizontal: 10,
        position: "relative",
        top: 18
    },
    getBtnText: {
        color: "#ffffff"
    }
});