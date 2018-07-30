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
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Point from '../../common/Point'
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class RecoScore extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        }
    }

    componentWillMount() {
        const {name} = this.props.navigation.state.params
        if (name === '考核评分表') {
            if (global.User_msg.regionCategoryId >= global.regionLevel.countryside) {
                this.setState({
                    listData: [
                        {
                            imgUrl: require('../../../assets/narmal/Oneself.png'),
                            route: 'AddTextArea',
                            name: '查看自身',
                            titleName: '自身评分'
                        },
                    ]
                })
            } else {
                this.setState({
                    listData: [
                        {
                            imgUrl: require('../../../assets/narmal/edit.png'),
                            route: 'AddTextArea',
                            name: '编辑分数',
                            titleName: '编辑分数',
                            RoutedName:'考核评分表-编辑分数'
                        },
                        {
                            imgUrl: require('../../../assets/narmal/Havejurisdictionover.png'),
                            route: 'EditScore',
                            name: '查看管辖',
                            titleName: '管辖区域评分'
                        },
                        {
                            imgUrl: require('../../../assets/narmal/Oneself.png'),
                            route: 'EditScore',
                            name: '查看自身',
                            titleName: '自身评分'
                        },

                    ]
                }, () => {
                    // console.log('考核评分表' + this.state.listData)
                })
            }
        } else if (name === '自查评分表') {
            if (global.User_msg.regionCategoryId < global.regionLevel.countryside) {
                this.setState({
                    listData: [
                        {
                            imgUrl: require('../../../assets/narmal/Characteristicindustry.png'),
                            route: 'EditScore',
                            name: '查看分数',
                            titleName: '管辖区域评分'
                        },
                    ]
                }, () => {
                    // console.log('考核评分表' + this.state.listData)
                })
            } else {
                this.setState({
                    listData: [
                        {
                            imgUrl: require('../../../assets/narmal/Characteristicindustry.png'),
                            route: 'EditScore',
                            name: '查看分数',
                            titleName: '管辖区域评分'
                        },
                        {
                            imgUrl: require('../../../assets/narmal/edit.png'),
                            route: 'EditScore',
                            name: '编辑分数',
                            titleName: '编辑分数'
                        },
                    ]
                }, () => {
                    // console.log('考核评分表' + this.state.listData)
                })
            }
        }
    }

    /**
     * 一行数据的显示
     * @param item
     * @returns {*}
     * @private
     */
    _rowItem(item) {
        const {navigation} = this.props
        return (
            <TouchableOpacity
                style={styles.row_item}
                onPress={() => {
                    navigation.navigate(item.route, {title: item.titleName,fromRoute:item.RoutedName})
                }}
            >
                <Image source={item.imgUrl} style={styles.item_img}/>
                <Text style={styles.item_name}>{item.name}</Text>
                <Point/>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor: global.commonCss.screenColor,}}>
                <View style={styles.container}>
                    {this.state.listData.map(item => this._rowItem(item))}
                    {/*{this._rowItem(require('../../../assets/images/Assessmentscale.png'), '编辑分数', 'EditScore', '编辑分数')}*/}
                    {/*{this._rowItem(require('../../../assets/images/Assessmentscale.png'), '查看管辖', 'EditScore', '管辖区域评分')}*/}
                    {/*{this._rowItem(require('../../../assets/images/Assessmentscale.png'), '查看自身', 'SelfRating', '自身评分')}*/}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: global.commonCss.screenColor,
    },
    row_item: {
        width: width,
        height: 50,
        alignItems: 'center',
        flex: 0,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: global.commonCss.borderColor

    },
    /**
     * 模块图片
     */
    item_img: {
        width: global.ScreenUtil.pTd(global.isIphoneX() ? 50 : 41),
        height: global.ScreenUtil.hTd(41),
        marginLeft: 15,
        marginRight: 25
    },
    /**
     * 模块名称
     */
    item_name: {
        marginRight: global.ScreenUtil.pTd(36),
        fontSize: 18,
        color: global.commonCss.fontColor
    }
});
