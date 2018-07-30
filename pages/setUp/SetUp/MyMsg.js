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
    ScrollView,
    Image
} from 'react-native';
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class MyMsg extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:global.commonCss.screenColor}}>
                <View style={styles.container}>
                    <View style={[styles.item,styles.header]}>
                        <Text style={styles.item_title}>头像</Text>
                        <Image style={styles.header_img} source={require('../../../assets/images/Assessmentscale.png')}/>
                    </View>
                    <View style={[styles.item,styles.name]}>
                        <Text style={styles.item_title}>昵称</Text>
                        <Text style={styles.item_content}>王晓宇</Text>
                    </View>
                    <View style={[styles.item,styles.name,styles.removeUnderline]}>
                        <Text style={styles.item_title}>性别</Text>
                        <Text style={styles.item_content}>女</Text>
                    </View>
                    <View style={[styles.item,styles.name]}>
                        <Text style={styles.item_title}>出生日期</Text>
                        <Text style={styles.item_content}>1999-10-10</Text>
                    </View>
                    <View style={[styles.item,styles.name,styles.removeUnderline]}>
                        <Text style={styles.item_title}>联系电话</Text>
                        <Text style={styles.item_content}>19825408240</Text>
                    </View>
                    <View style={[styles.item,styles.name]}>
                        <Text style={styles.item_title}>所在地区</Text>
                        <Text style={[styles.item_content,styles.address]}>南京市栖霞区南京市栖霞区南京市栖霞区南京市栖霞区南京市栖霞区南京市栖霞区南京市栖霞区</Text>
                    </View>
                    <View style={[styles.item,styles.name,styles.removeUnderline]}>
                        <Text style={styles.item_title}>用户级别</Text>
                        <Text style={[styles.item_content,styles.level]}>普通存级别</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: global.commonCss.screenColor,
    },
    /**
     * 每一行的总样式
     */
    item:{
        flex:0,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:global.ScreenUtil.pTd(30),
        marginRight:global.ScreenUtil.pTd(30),
        borderBottomWidth:global.ScreenUtil.hTd(1),
        borderColor:global.commonCss.borderColor,
        height:global.ScreenUtil.hTd(112)
    },
    /**
     * 行的字体
     */
    item_title:{
        fontSize:18
    },
    /**
     * 内容的字体
     */
    item_content:{
        fontSize:16,
        color:'#9c9c9c'
    },
    /**
     * 头像的图片
     */
    header_img:{
        width:global.ScreenUtil.pTd(168),
        height:global.ScreenUtil.hTd(126)
    },
    /**
     * 头像行的特殊样式
     */
    header:{
        height:global.ScreenUtil.hTd(167)
    },
    /**
     * 昵称的样式
     */
    /**
     * 用户级别的
     */
    level:{
        color:'#0c0c0c'
    },
    /**
     * 去除下划线
     */
    removeUnderline:{
        borderBottomWidth:0
    },
    /**
     * 地址行
     */
    address:{
        width:global.ScreenUtil.pTd(360),
    }
});
