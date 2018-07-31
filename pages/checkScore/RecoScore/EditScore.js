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
    TouchableOpacity,
    FlatList
} from 'react-native';
import global from "../../../utils/global/global";
import YgInput from '../../common/YgInput'
import queryTabData from "./queryTabData";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class EditScore extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            fromRoute: '',
            chooseBoxISView: false,
            routeUrl:''
        }
    }

    /**
     *
     */
    componentWillMount() {
        const {params} = this.props.navigation.state
        console.log(params)
        this.setState({fromRoute: params.fromRoute})
        switch (params.fromRoute){
            case '考核评分表':
                switch (params.title){
                    case '管辖区域评分':
                        this.setState({routeUrl:'queryTabData'})
                        break;
                    case '编辑分数':
                        this.setState({routeUrl:'ScoreEdit'})
                        break;
                }
                break;
        }
    }

    /**
     * 行的构造函数
     */
    _dataLIst(url, editType) {
        const {navigation} = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    navigation.navigate(url, {editType: editType, fromRoute: this.state.fromRoute})
                }}
                style={styles.item}>
                <View style={styles.item_left}>
                    <View>
                        <Text style={styles.content_font}>核查调查表-{}</Text>
                        <Text style={styles.item_date}>2018-06-13-09:23:19</Text>
                    </View>
                </View>
                <View style={styles.item_right}>
                    <Text style={styles.content_font}>未评分</Text>
                </View>
            </TouchableOpacity>
        )
    }

    /**
     * 可选项的构造函数
     */
    _choosebox(item) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                }}
                style={styles.option}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <YgInput/>
                    <View style={styles.header}>
                        <View style={styles.msg_left}>
                            <Text style={styles.head_font}>共计{this.state.number}份</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.head_right}
                            onPress={() => {
                                this.setState({
                                    chooseBoxISView: !this.state.chooseBoxISView
                                })
                            }}
                        >
                            <Text style={[styles.can_choose, styles.head_font]}>筛选</Text>
                            <View style={styles.nabla}></View>
                            <View style={{display: this.state.chooseBoxISView ? 'flex' : 'none'}}>
                                <View style={[styles.choose_box]}>
                                    <FlatList
                                        data={[{name: '全部'}, {name: '90以上'}]}
                                        renderItem={({item}) => this._choosebox(item)}
                                        ItemSeparatorComponent={() => {
                                            return (<View style={styles.item_separator}></View>)
                                        }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{zIndex: -1}}>
                    {this._dataLIst(this.state.routeUrl, {height: 50})}
                    {/*{this._dataLIst('queryTabData')}*/}
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    /**
     * 向下的箭头
     */
    nabla: {
        // marginTop:global.ScreenUtil.hTd(10),
        top: 5,
        borderWidth: global.ScreenUtil.hTd(12),
        borderColor: '#0c0c0c',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
    },
    /**
     * 头部样式
     */
    header: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
        paddingLeft: 20,
        paddingRight: 20,
        height: global.ScreenUtil.hTd(100),
        alignItems: 'center',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: 'gray',
        elevation: 2,
        marginTop: 1,
        marginBottom: 1
    },
    msg_left: {
        flex: 0,
        flexDirection: 'row',
    },
    /**
     * 头部右边的样式
     */
    head_right: {
        flex: 0,
        flexDirection: 'row',
    },
    item: {
        flex: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        height: global.ScreenUtil.hTd(110),
        paddingLeft: 22,
        paddingRight: 22,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: global.commonCss.borderColor
    },
    item_date: {
        fontSize: 12,
        color: "#9c9c9c",
        marginTop: global.ScreenUtil.hTd(14)
    },
    item_right: {},
    item_left: {},
    /**
     * 筛选按钮
     */
    can_choose: {
        marginRight: global.ScreenUtil.pTd(36)
    },
    /**
     * 头部的字体样式
     */
    head_font: {
        fontSize: 18
    },
    /**
     * 字体的样式
     */
    content_font: {
        fontSize: 16,
        color: '#0c0c0c'
    },
    /**
     * 筛选框的样式
     */
    choose_box: {
        position: 'absolute',
        right: -8,
        top: 25,
        zIndex: 999,
        width: global.ScreenUtil.pTd(278),
        backgroundColor: "#ffffff",
        shadowColor: "rgba(221, 221, 221, 0.6)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 25,
        shadowOpacity: 1
    },
    /**
     * 每个选择框的样式
     */
    option: {
        flex: 0,
        height: global.ScreenUtil.hTd(70),
        justifyContent: 'center',
        alignItems: 'center'
    },
    /**
     * 选择框之间的横线
     */
    item_separator: {
        height: global.ScreenUtil.hTd(1),
        backgroundColor: global.commonCss.borderColor
    }
});
