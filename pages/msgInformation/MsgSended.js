/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class MsgSended extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            itemData: [
                {name: '密码修改', pointColor: false, navigation: 'RevisePassWord'},
                {name: '二维码下载', pointColor: false, navigation: 'QrCodeDown'},
                {name: '我的信息', pointColor: true, navigation: 'MyMsg'}
            ]
        }
    }

    /**
     * 中间的模块构造器
     * @param item
     * @returns {*}
     * @private
     */
    _rowItem(item) {
        const {navigation} = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    navigation.navigate(item.navigation)
                }}
            >
                <View style={styles.my_item}>
                    <View style={styles.my_item_left}>
                        <View style={[styles.my_item_point, item.pointColor ? styles.pointColor : '']}>
                        </View>
                        <Text style={[styles.my_item_left,styles.item_name]}>{item.name}</Text>
                    </View>
                    <Image style={styles.my_item_arrow} source={require('../../assets/images/small-Return.png')}/>
                </View>
            </TouchableOpacity>
        )
    }

    componentWillMount() {
        console.log(global.User_msg)
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.my_head}>
                    <Text style={{fontSize: 18, color: "#0c0c0c",}}>我的</Text>
                </View>
                <View style={styles.my_msg}>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                navigation.navigate('HeadAppear', {})
                            }}
                        >
                            <Image style={styles.my_head_img} source={require('../../assets/images/mainImg.png')}/>
                        </TouchableOpacity>
                        <Text style={{fontSize: 17, color: "#0c0c0c"}}>{global.User_msg.name}</Text>
                        <Text style={{fontSize: 15, marginTop: 5, marginBottom: 25}}>{global.User_msg.regionName}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.my_head_right}
                        onPress={() => {
                            navigation.navigate()
                        }}
                    >
                        <View style={{paddingLeft: 15}}>
                            <View style={styles.my_img}>
                                <Image style={{width: 18, height: 18,}}
                                       source={require('../../assets/images/edit.png')}/>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.edit}>编辑资料</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{height: 30, backgroundColor: '#ffffff'}}>
                </View>
                {/**
                  * 我的下方item
                  */}
                <View style={styles.my_option}>

                    <FlatList
                        data={this.state.itemData}
                        ItemSeparatorComponent={() => <View style={styles.line}></View>}
                        renderItem={({item}) => this._rowItem(item)}
                    />

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            navigation.navigate('RevisePassWord')
                        }}
                    >
                        <View style={styles.my_item}>
                            <View style={styles.my_item_left}>
                                <View style={[styles.my_item_point, styles.none]}></View>
                                <Text style={[styles.my_item_left,styles.item_name]}>退出登录</Text>
                            </View>
                            <Image style={[styles.my_item_arrow, styles.none]}
                                   source={require('../../assets/images/small-Return.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: global.commonCss.screenColor,
        paddingTop: global.isIphoneX() ? 40 : 0
    },
    /**
     * 我的 样式
     */
    my_head: {
        flex: 0,
        height: 50,
        width: width,
        // alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: 15
    },
    /**
     * 自己头像的图片
     */
    my_head_img: {
        width: 136,
        height: 70,

    },
    /**
     * 编辑图片上的样式
     */
    my_img: {
        width: 40,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#87e7b2',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    /**
     * 自己信息的样式
     */
    my_msg: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#e4e4e4'
    },
    /**
     * 下面的item的样式
     */
    my_option: {
        marginTop: 10,
        backgroundColor: '#ffffff'
    },
    /**
     * 模块总样式
     */
    my_item: {
        flex: 0,
        height: global.ScreenUtil.hTd(115),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 30,
    },
    /**
     * 模块前的图片样式
     */
    my_item_arrow: {
        width: 8,
        height: 13,
    },
    /**
     * 点的样式
     */
    my_item_point: {
        width: 5,
        height: 5,
        backgroundColor: global.commonCss.mainColor,
        borderRadius: 3,
        marginRight: 20
    },
    /**
     * 模块前的左边的样式
     */
    my_item_left: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    /**
     * 模块前的左边字体的样式
     */
    item_name:{
        fontSize: 18
    },
    /**
     * 不同点的样式
     */
    pointColor: {
        backgroundColor: '#f26b6a'
    },
    /**
     * 线的样式
     */
    line: {
        height: 1,
        backgroundColor: global.commonCss.borderColor
    },
    /**
     * 不显示
     */
    none: {
        opacity: 0
    },
    /**
     * 编辑文字样式
     */
    edit:{
        fontSize:16,
        color:global.commonCss.fontColor,
        marginTop:global.ScreenUtil.hTd(20)
    }
});
