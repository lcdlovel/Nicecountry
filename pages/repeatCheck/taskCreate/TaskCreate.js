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
import TaskContent from "../../common/TaskContent";
import global from "../../../utils/global/global";
import CrudApi from "../../../utils/request/crud";

//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
let addData = new Map()
type Props = {};
export default class TaskCreate extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    /**
     *页面左端的确认按钮
     */

    static navigationOptions = (props) => {
        const {navigation} = props
        const {params} = navigation.state
        return {
            headerRight: (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        addData.set('regionId', global.User_msg.regionId)
                        console.log(addData)
                        navigation.navigate(params.fromCheck === 'SelfCheckTask' ? 'SelfCheckTask' : 'AddTaskImg')
                    }}
                >
                    <Text style={global.commonCss.confirm_btn}>确认</Text>
                </TouchableOpacity>
            )
        }
    }
    /**
     *生命周期：创建前
     */

    componentWillMount(){
        CrudApi.getInfo({
            url:'TitleType/findAllByPage',
            callback:(res)=>{
                console.log(res)
                this.setState({tasks:res.data.list})
            }
        })
    }
    /**
     * 选项模块的构造函数
     * @param task
     * @returns {*}
     * @private
     */
    _taskCreate(task) {
        return (
            <TaskContent
                key={task}
                ableChooseList={task}
            />
        )
    }


    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:global.commonCss.screenColor}}>
                <View style={styles.container}>
                    <View style={styles.tc_fun}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Text style={{fontSize: 18}}>常见问题</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {this.state.tasks.map((item) => this._taskCreate(item))}
                    </View>

                    <View style={styles.tc_other}>
                        <View style={styles.circle_dot}></View>
                        <Text style={{fontSize: 18}}>其它</Text>
                        <TouchableOpacity
                            style={styles.check_box}
                        >
                            <Image resizeMode='contain' style={[styles.check_box_img]}/>
                        </TouchableOpacity>
                    </View>
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
        paddingTop: 20,
        paddingBottom: 20
    },
    /**
     * 常见问题项的总样式
     */
    tc_fun: {
        flex: 0,
        flexDirection: 'row',
        width: width,
        paddingLeft: 10,
        alignItems: 'center',
        height: global.ScreenUtil.hTd(112),
        backgroundColor: "#ffffff",
        justifyContent: 'space-between',
    },
    /**
     * 点的样式
     */
    circle_dot: {
        width: 5,
        height: 5,
        borderRadius: 3,
        marginRight: 3,
        backgroundColor: '#f3c819'
    },
    /**
     * 其他选项的样式
     */
    tc_other: {
        flex: 0,
        width: width,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        height: 20,
        marginTop: global.ScreenUtil.hTd(20),
        marginBottom: 5
    },
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
     * 全选框的样式
     */
    check_box: {
        width: 12,
        height: 12,
        borderWidth: 1,
        borderColor: 'gray',
        marginLeft: 12
    },
    check_box_img: {
        width: 12,
        height: 12
    },

});
