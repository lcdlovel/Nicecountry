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
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList, Alert
} from 'react-native';
import global from "../../../utils/global/global";
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';
import DatePicker from 'react-native-datepicker'
import {ListDialog, Describe, PickPhoto} from '../../common'
import CrudApi from "../../../utils/request/crud";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
let ManMsg = new Map()
export default class AddManMsg extends Component<Props> {
    ListPopupDialog;
    cultureListDialog;

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            describe: '',
            listData: [],
            Group: '', //所属组
            name: '',//姓名
            manChoose: true,//性别选择
            femaleChoose: false,
            cultureList: [
                {name: '小学'},
                {name: '中学'},
                {name: '高中'},
                {name: '专科'},
                {name: '本科'},],
            cultrue: ''
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

    changeDescribe(val) {
        this.setState({describe: val})
        console.log(this.state.describe)
    }

    componentWillMount() {
        CrudApi.getInfo({
            url: 'Region/getAllByAdmin',
            data: {
                type: 'check'
            },
            callback: (res) => {
                this.setState({listData: res.data[0].regionTreeVoLst})
                console.log(res)
            }
        })
    }

    render() {
        const slideAnimation = new SlideAnimation({slideFrom: 'bottom',});
        return (
            <ScrollView style={{backgroundColor: global.commonCss.screenColor,}}>
                <View style={styles.container}>
                    <View>
                        {/*类别行*/}
                        <View style={styles.fill_zu}>
                            <View style={styles.point}></View>
                            <Text style={styles.itemName}>类别</Text>
                        </View>
                        <View>
                            <View style={styles.chooseCase}>
                                <Text style={styles.chooseCase_font}>请选择</Text>
                                <Image style={styles.chooseCase_img}
                                       source={require('../../../assets/icons/Pleasechoose.png')}/>
                            </View>
                            <Text style={styles.perponType_name}>保洁员</Text>
                        </View>

                        {/**所属组*/}
                        <View style={styles.fill_zu}>
                            <View style={styles.point}></View>
                            <Text style={styles.itemName}>所属组</Text>
                        </View>
                        <View style={styles.input}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    this.ListPopupDialog.show()
                                }}
                            >
                                <View style={styles.item_clo}>
                                    <Text
                                        style={styles.group_choose}>{this.state.Group === '' ? '请选择' : this.state.Group}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        {/**姓名行*/}
                        <View style={styles.fill_zu}>
                            <View style={styles.point}></View>
                            <Text style={styles.itemName}>姓名</Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput placeholder='请输入' placeholderTextColor='#9c9c9c' selectionColor='#9c9c9c'
                                       onChangeText={(text) => {
                                           this.setState({name: text})
                                           ManMsg.set('name', text)
                                       }}
                                       value={this.state.name}
                                       style={styles.text_Input}/>
                        </View>

                        {/**性别行*/}
                        <View style={styles.fill_zu}>
                            <View style={styles.point}></View>
                            <Text style={styles.itemName}>性别</Text>
                        </View>
                        <View style={styles.sex}>
                            <View style={styles.sexItem}>
                                <Image source={require('../../../assets/icons/male.png')} style={styles.sex_icon}/>
                                <Text
                                    style={[styles.sex_name, this.state.manChoose ? styles.sex_choose : '']}
                                    onPress={() => {
                                        this.state.manChoose ? this.setState({manChoose: !this.state.manChoose}) :
                                            this.state.femaleChoose ?
                                                this.setState({
                                                    femaleChoose: !this.state.femaleChoose,
                                                    manChoose: !this.state.manChoose
                                                }) :
                                                this.setState({manChoose: !this.state.femaleChoose})
                                        this.state.manChoose ? ManMsg.set('sex', '男') : ManMsg.set('sex', '女')
                                    }}
                                >男</Text>
                            </View>
                            <View style={[styles.sexItem, styles.sex_man]}>
                                <Image source={require('../../../assets/icons/female.png')} style={styles.sex_icon}/>
                                <Text
                                    style={[styles.sex_name, this.state.femaleChoose ? styles.sex_choose : '']}
                                    onPress={() => {
                                        this.state.femaleChoose ? this.setState({femaleChoose: !this.state.femaleChoose}) :
                                            this.state.manChoose ?
                                                this.setState({
                                                    femaleChoose: !this.state.femaleChoose,
                                                    manChoose: !this.state.manChoose
                                                }) :
                                                this.setState({femaleChoose: !this.state.femaleChoose})
                                        this.state.femaleChoose ? ManMsg.set('sex', '男') : ManMsg.set('sex', '女')
                                    }}
                                >女</Text>
                            </View>
                            {/*<Text style={styles.sex_info}>(点击字即可)</Text>*/}
                        </View>

                        {/**出生日期行*/}
                        <View style={styles.fill_zu}>
                            <View style={styles.point}></View>
                            <Text style={styles.itemName}>出生日期</Text>
                        </View>
                        <View style={styles.date_row}>
                            <DatePicker
                                style={{paddingTop: 0, height: global.ScreenUtil.hTd(30)}}
                                date={this.state.date}
                                mode="date"
                                placeholder="请选择"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2016-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        display: 'none'
                                    },
                                    dateInput: {
                                        position: 'absolute',
                                        borderWidth: 0,
                                        left: 0,
                                        top: -18,
                                    },
                                    dateText: {
                                        fontSize: 16,
                                        color: "#9c9c9c"
                                    },
                                    placeholderText: {
                                        fontSize: 16,
                                        color: "#9c9c9c"
                                    }

                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {
                                    this.setState({date: date})
                                }}
                            />
                        </View>
                        {/**文化水平行*/}
                        <View style={styles.fill_zu}>
                            <View style={styles.point}></View>
                            <Text style={styles.itemName}>文化水平</Text>
                        </View>
                        <View style={styles.input}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    this.cultureListDialog.show()
                                }}
                            >
                                <View style={styles.item_clo}>
                                    <Text
                                        style={styles.group_choose}>{this.state.cultrue === '' ? '请选择' : this.state.cultrue}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/**性质行*/}
                        <View style={styles.fill_zu}>
                            <View style={styles.point}></View>
                            <Text style={styles.itemName}>性质</Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput placeholder='请输入' placeholderTextColor='#9c9c9c' selectionColor='#9c9c9c'
                                       style={styles.text_Input}/>
                        </View>

                        {/**描述行*/}
                        <View style={styles.fill_zu}>
                            <View style={styles.point}></View>
                            <Text style={styles.itemName}>描述</Text>
                        </View>
                        <View>
                            <Describe changeDescribe={this.changeDescribe.bind(this)}
                                      customStyle={styles.describe}
                                      textInputStyle={styles.text_input_style}
                                      fontLength={this.state.describe.length}
                                      maxLength={300}/>
                        </View>
                        {/**拍照行*/}
                        <View style={styles.photo}>
                            <PickPhoto maxLength={4}/>
                        </View>
                    </View>
                </View>
                {/**选择组的对话框*/}
                <PopupDialog
                    ref={(popupDialog) => {
                        this.ListPopupDialog = popupDialog;
                    }}
                    dialogAnimation={slideAnimation}
                    width={0.7}
                >
                    <View>
                        <FlatList
                            data={this.state.listData}
                            ListHeaderComponent={() => (
                                <View style={{height: 0, backgroundColor: '#dcdbdb', marginTop: 5}}/>)}
                            ListFooterComponent={() => (
                                <View style={{height: 0, backgroundColor: '#dcdbdb', marginBottom: 5}}/>)}
                            ItemSeparatorComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
                            renderItem={({item}) =>
                                <Text key={item.name}
                                      style={styles.item_text}
                                      onPress={() => {
                                          this.ListPopupDialog.dismiss()
                                          this.setState({Group: item.name})
                                          ManMsg.set({regionId: item.id})
                                          console.log(item.name)
                                      }
                                      }>{item.name}</Text>}
                        />
                    </View>
                </PopupDialog>
                {/**选择文化水平的对话框*/}
                <PopupDialog
                    ref={(popupDialog) => {
                        this.cultureListDialog = popupDialog
                    }}
                    dialogAnimation={slideAnimation}
                    width={0.7}
                >
                    <View>
                        <FlatList
                            data={[
                                {name: '小学'},
                                {name: '中学'},
                                {name: '高中'},
                                {name: '专科'},
                                {name: '本科'},
                                {name: '硕士'},
                                {name: '博士'},
                                {name: '博士后'},
                            ]}
                            ListHeaderComponent={() => (
                                <View style={{height: 0, backgroundColor: '#dcdbdb', marginTop: 5}}/>)}
                            ListFooterComponent={() => (
                                <View style={{height: 0, backgroundColor: '#dcdbdb', marginBottom: 5}}/>)}
                            ItemSeparatorComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
                            renderItem={({item}) =>
                                <Text key={item.name}
                                      style={styles.item_text}
                                      onPress={() => {
                                          this.ListPopupDialog.dismiss()
                                          this.setState({cultrue: item.name})
                                          // ManMsg.set({regionId:item.id})
                                          // console.log(item.name)
                                      }
                                      }>{item.name}</Text>}
                        />
                    </View>
                </PopupDialog>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: global.ScreenUtil.pTd(25),
        backgroundColor: global.commonCss.screenColor,
    },
    /**
     * 各种类名称
     */
    itemName: {
        marginLeft: global.ScreenUtil.pTd(15),
        fontSize: global.commonCss.primaryFontSize,
        color: "#0c0c0c",
    },
    /**
     * 所属组的显示字体
     */
    group_choose: {
        fontSize: 16,
        color: '#9c9c9c'
    },
    /**
     * 一行的总样式
     */
    item_clo: {
        marginBottom: global.ScreenUtil.hTd(18)
    },
    /**
     * 点的样式
     */
    point: {
        width: 6,
        height: 6,
        borderRadius: 4,
        backgroundColor: global.commonCss.mainColor
    },
    /**
     * 一组的总样式
     */
    fill_zu: {
        flex: 0,
        flexDirection: 'row',

        marginBottom: global.ScreenUtil.hTd(30),
        // justifyContent:'center',
        alignItems: 'center',
        marginTop: global.ScreenUtil.hTd(25),
    },
    /**
     * 选择框和输入框的总样式
     */
    input: {
        marginLeft: global.ScreenUtil.pTd(23),
        width: global.ScreenUtil.pTd(664),
        borderBottomWidth: global.ScreenUtil.hTd(0.5),
        borderColor: '#9c9c9c',
    },
    /**
     * 人员类型选择框
     */
    chooseCase: {
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
        marginRight:global.ScreenUtil.pTd(40)
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
     * 性别行
     */
    sex: {
        flex: 0,
        flexDirection: 'row',
        paddingLeft: global.ScreenUtil.pTd(23),
    },
    /**
     * 男和女的样式
     */
    sexItem: {
        flex: 0,
        flexDirection: 'row',
        // marginRight: 20,
    },
    /**
     * 性别收个的位置特殊处理
     */
    sex_man: {
        marginLeft: global.ScreenUtil.pTd(96)
    },
    /**
     * 性别名称的样式
     */
    sex_name: {
        marginLeft: 15,
        fontSize: 18,
    },
    /**
     * 日期行的样式
     */
    date_row: {
        width: global.ScreenUtil.pTd(664),
        borderBottomWidth: global.ScreenUtil.hTd(1),
        borderColor: '#9c9c9c',
        marginLeft: 10,
        marginTop: 8
    },
    /**
     * 描述行外框的样式
     */
    describe: {
        width: global.ScreenUtil.pTd(695),
    },
    /**
     * 描述内额text-input的样式
     */
    text_input_style: {
        width: global.ScreenUtil.pTd(635)
    },
    photo: {},
    sex_icon: {
        width: 20,
        height: 20
    },
    text_Input: {
        fontSize: 16,
        marginBottom: global.ScreenUtil.hTd(18)
    },
    item_text: {
        height: 40,
        lineHeight: 40,
        fontSize: 16,
        paddingLeft: 20
    },
    /**
     * 性别选中时的样式
     */
    sex_choose: {
        color: global.commonCss.mainColor
    },


});
