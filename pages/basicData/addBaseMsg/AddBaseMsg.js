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
    TextInput,
    Alert,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import global from "../../../utils/global/global";
import {Describe,PickPhoto,Point} from '../../common'
import CrudApi from "../../../utils/request/crud";
import ScreenUtil from "../../../utils/global/ScreenUtil";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddBaseMsg extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            describe: ''
        }
    }

    /**
     *顶部左边按钮
     */
    static navigationOptions = (props) => {
        const {navigation} = props
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        // CrudApi.postInfo({
                        //     url:'Region/add',
                        //     data:{
                        //         name:areaData.get('groupName'),
                        //         parentId:global.User_msg.regionId,
                        //         regionCategoryId:areaData.get('regionCategoryId'),
                        //         seq:areaData.get('orderNum'),
                        //         remark:areaData.get('remark')
                        //     },
                        //     callback:(res)=>{
                        //         alert(res.msg)
                        Alert.alert('添加完成')
                        //         navigation.goBack(null)
                        //     }
                        // })
                    }
                    }
                >
                    <Text style={global.commonCss.confirm_btn}>发送</Text>
                </TouchableOpacity>)
        }
    }

    /**
     * 获取描述值
     * @param val
     */
    changeDescribe(val) {
        this.setState({describe: val})
        console.log(this.state.describe)
    }
    /**
     * 获取照片
     */
    getPictrue(){}
    render() {
        return (
            <ScrollView style={styles.container}>
                {/**名称*/}
                <View>
                <View style={styles.name_row}>
                    <Point/>
                    <Text style={styles.row_name}>名称</Text>
                </View>
                <View style={styles.name_textInput}>
                    <TextInput placeholder='请输入' style={styles.textInput} underlineColorAndroid='transparent'/>
                </View>
                </View>
                {/**类别*/}
                <View>
                    <View style={styles.name_row}>
                        <Point/>
                        <Text style={styles.row_name}>类别</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                this.PersonTypeList.show()
                            }}
                        >
                            <View style={styles.chooseCase}>
                                <Text style={styles.chooseCase_font}>请选择</Text>
                                <Image style={styles.chooseCase_img}
                                       source={require('../../../assets/icons/Pleasechoose.png')}/>
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.perponType_name}>保洁员</Text>
                    </View>
                </View>
                {/**户数*/}
                <View style={styles.households_row}>
                    <View style={styles.name_row}>
                        <Point/>
                        <Text style={styles.row_name}>户数</Text>
                    </View>

                    <TextInput placeholder='请输入' style={styles.households}/>
                    <Text style={{paddingTop: global.ScreenUtil.hTd(30),fontSize:16}}>个</Text>
                </View>

                <View style={styles.households_box}>
                    <View style={styles.households_req}></View>
                </View>
                {/**经纬度*/}
                <View>
                    <View style={styles.name_row}>
                        <Point/>
                        <Text style={styles.row_name}>经纬度</Text>
                    </View>
                    <View style={styles.position}>
                        <View style={styles.position_item}>
                            <Text style={styles.position_item_val}>经度:</Text>
                            <TextInput placeholder='请输入' style={styles.position_val}/>
                        </View>
                        <View style={[styles.position_item,styles.position_spacial]}>
                            <Text style={styles.position_item_val}>纬度:</Text>
                            <TextInput placeholder='请输入' style={styles.position_val}/>
                        </View>
                    </View>
                </View>

                {/*<View style={styles.name_textInput}>*/}
                {/*<TextInput placeholder='请输入' style={styles.textInput} underlineColorAndroid='transparent' />*/}
                {/*</View>*/}
                {/**描述*/}
                <View style={styles.name_row}>
                    <Point/>
                    <Text style={styles.row_name}>描述</Text>
                </View>
                <View style={styles.describe_box}>
                    <Describe
                        changeDescribe={this.changeDescribe.bind(this)}
                        fontLength={this.state.describe.length}
                        maxLength={300}
                        customStyle={styles.describe}
                    />
                </View>
                {/**照片*/}
                <View style={styles.photo}>
                    <PickPhoto maxLength={10} getPictrue={this.getPictrue.bind(this)}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    /**
     * 页面整体样式
     */
    container: {
        flex: 1,
        backgroundColor: global.commonCss.screenColor,
        paddingLeft: global.ScreenUtil.pTd(27)
    },
    /**
     * 页面上方的发送按钮
     */
    confirm_btn: {
        fontSize: 18,
        color: 'rgb(112,218,173)',
        right: ScreenUtil.pTd(32)
    },
    /**
     * 每一种名称一行的样式
     */
    name_row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: global.ScreenUtil.hTd(30),
    },
    /**
     * 一行的名称样式
     */
    row_name: {
        marginLeft: global.ScreenUtil.pTd(16),
        fontSize: global.commonCss.primaryFontSize,
    },
    /**
     * 输入行的样式
     */
    name_textInput: {
        marginTop: global.ScreenUtil.hTd(32),
        marginLeft: global.ScreenUtil.pTd(28),
        borderBottomWidth: global.ScreenUtil.hTd(0.5),
        borderColor: global.commonCss.borderColor,
    },
    /**
     * 输入框的样式
     */
    textInput: {
        paddingBottom: global.ScreenUtil.hTd(16),
        width:global.ScreenUtil.pTd(667),
        paddingTop: 0,
        fontSize: 16
    },
    /**
     * 人员类型选择框
     */
    chooseCase: {
        marginTop: global.ScreenUtil.hTd(20),
        width: global.ScreenUtil.pTd(278),
        height: global.ScreenUtil.hTd(88),
        borderStyle: 'dashed',
        borderColor: '#dddddd',
        borderRadius: 10,
        borderWidth: 1,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    /**
     * 选择框内的字体
     */
    chooseCase_font: {
        fontSize: 16,
        color: "#9c9c9c",
        marginRight: global.ScreenUtil.pTd(40)
    },
    /**
     * 选择框的加号
     */
    chooseCase_img: {
        width: global.ScreenUtil.pTd(44),
        height: global.ScreenUtil.hTd(44)
    },
    /**
     * 所选人员类别的名称
     */
    perponType_name: {
        marginLeft: global.ScreenUtil.pTd(28),
        fontSize: 18,
        marginTop: global.ScreenUtil.hTd(20)
    },
    /**
     * 户数的输入框
     */
    households: {
        fontSize:16,
        marginLeft: global.ScreenUtil.pTd(42),
        width: global.ScreenUtil.pTd(190),
        borderBottomWidth: global.ScreenUtil.hTd(0.5),
        borderColor: global.commonCss.borderColor,
        paddingTop: global.ScreenUtil.hTd(30),
    },
    /**
     * 户数一行的样式
     */
    households_row: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingLeft: 18
    },
    /**
     * d对户数的要求
     */
    households_req: {
        width: global.ScreenUtil.pTd(696),
        marginTop:global.ScreenUtil.hTd(30),
        height: 60,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#dddddd",
        borderStyle: 'dashed'
    },
    households_box: {
    },
    remark_req: {
        backgroundColor: '#ffffff',
        width: 0.95 * width,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dddddd"
    },
    /**
     * 备注
     */
    describe: {
        width: global.ScreenUtil.pTd(696),
        marginTop:global.ScreenUtil.hTd(20)
    },
    /**
     * 经纬度
     */
    position:{
        flex:0,
        flexDirection:'row',
        borderBottomWidth:global.ScreenUtil.hTd(0.5),
        borderColor:global.commonCss.borderColor,
        width:global.ScreenUtil.pTd(667),
        marginLeft:global.ScreenUtil.pTd(25),
        paddingBottom:global.ScreenUtil.hTd(16),
        paddingTop:global.ScreenUtil.hTd(30)
    },
    /**
     * 经度与纬度
     */
    position_item:{
        flex:0,
        flexDirection:'row'
    },
    /**
     * 位置的值
     */
    position_val:{
        fontSize:16

    },
    /**
     * 位置名称
     */
    position_item_val:{
        fontSize:16,
        marginRight:global.ScreenUtil.pTd(22)
    },
    /**
     *经度与纬度之间的差距
     */
    position_spacial:{
        marginLeft:global.ScreenUtil.pTd(112)
    },
    /**
     * photo照片
     */
    photo:{
        paddingBottom:20
    }
});
