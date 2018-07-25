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
    Image
} from 'react-native';
import global from "../../utils/global/global";
import TaskCard from "../repeatCheck/taskCreate/TaskCard";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class TaskContent extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            index: '',
            cancelAllFocused: true
        }
    }

    componentWillMount() {
        // console.log(this.props.isAllChoose)
    }

    componentWillReceiveProps(nextProps) {

    }

    /**
     * 渲染选项卡
     * @param item
     * @returns {*}
     * @private
     */
    _taskCreate(item) {
        return (
            <TaskCard cardName={item}
                      isAllFocuse={this.state.isFocused}
                      cancelAllFocuse={this.cancelAllFocuse.bind(this)}
            />
        )
    }

    /**
     * 取消全选按钮
     * @param val
     */
    cancelAllFocuse(val){
        console.log(val)
        this.setState({isFocused:val})
        // console.log(val)
        // this.setState({cancelAllFocused:val},function () {
        //     console.log(this.state.cancelAllFocused)
        // })
    }
    render() {
        return (
            <View style={styles.tc_row}>
                <View style={styles.tc_title}>
                    <View style={styles.circle_dot}></View>
                    <Text style={{fontSize: 18}}>{this.props.ableChooseList.taskName}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({isFocused: !this.state.isFocused})
                        }}
                        style={[]}
                    >
                        <Image
                            resizeMode='contain'
                            style={[styles.check_box, this.state.isFocused?styles.check_box_img:'']}
                            source={this.state.isFocused?require('../../assets/icons/true.png'):''}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.tc_tasktype}>
                    {this.props.ableChooseList.taskArr.map(item => this._taskCreate(item))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /**
     * 整体样式
     */
    tc_row: {
        backgroundColor:global.commonCss.screenColor
    },
    /**
     * 选项名称的样式
     */
    tc_title: {
        flex: 0,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        height: 20,
        marginTop: global.ScreenUtil.hTd(20),
        marginBottom: global.ScreenUtil.hTd(20),
    },
    /**
     * 选项卡外框的样式
     */
    tc_tasktype: {
        flex: 0,
        flexDirection: 'row',
        width: width,
        flexWrap: 'wrap',
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(182, 183, 185, 0.28)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 12,
        shadowOpacity: 1,
        elevation: 3,
        paddingLeft: global.ScreenUtil.pTd(29),
        paddingBottom: global.ScreenUtil.hTd(21),
    },
    /**
     * 点的样式
     */
    circle_dot: {
        width: 5,
        height: 5,
        borderRadius: 3,
        marginRight: global.ScreenUtil.pTd(15),
        backgroundColor: '#f3c819'
    },
    /**
     * 选项框的样式
     */
    check_box: {
        width: global.ScreenUtil.pTd(global.isIphoneX() ? 35 : 30),
        height: global.ScreenUtil.hTd(30),
        borderWidth: 1,
        borderColor: global.commonCss.borderColor,
        marginLeft: 12
    },
    /**
     * 选中时选项框的样式
     */
    check_box_img: {
        borderColor:'transparent'
    },
    choose: {
        backgroundColor: global.commonCss.mainColor
    },

    /**
     * 选项框选中的样式
     */
    fouced: {
        borderColor: global.commonCss.mainColor,
        color: global.commonCss.mainColor
    }
});
