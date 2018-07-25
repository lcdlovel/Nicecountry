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
            tasks: [
                {
                    taskName: '村容村貌',
                    taskArr: ['庄台秸秆堆内垃 ', '垃圾未进垃圾桶和池内', '有露天粪坑', '露天焚烧秸秆', '破旧房屋断壁', '化粪池便水乱排放', '生活污水乱排放', '畜禽粪便乱排放']
                },
                {taskName: '村庄河道', taskArr: ['河道有漂浮物', '河道有水生植物', '河坡不平整', '河坡乱建乱放乱挖', '河坡有垃圾']},
                {taskName: '村庄道路', taskArr: ['路道有垃圾', '路道有堆放物', '路面破损',]},
                {taskName: '村庄绿化', taskArr: ['绿化未防治病虫', '未及时清理落叶掉果', '绿化带有杂草', '绿化带堆放杂物', '绿化带有缺株和死树']},
                {
                    taskName: '公共基础设施',
                    taskArr: ['村服务中心地面不干净', '制度不健全，合同不规范', '公共厕所不清洁有异味', '照明、洗手池和水冲损坏', '路灯、涵闸、泵站损坏', '前面破损、桥梁栏杆损坏', '下水道堵塞', '健身休闲广场损坏、不干净', '健身休闲广场损毁啊、不干净', '健身器损坏', '卫生室不整洁', '无保洁员休息室', '墙面乱涂乱画', '农家屋、活动场所未正常开放']
                },
            ],
            Index: '',
            parentIndex: '',
            isAll: [...false],
            isChoosed: [...false]
        }
    }

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


    _taskCreate(task) {
        return (
            <TaskContent ableChooseList={task}/>
        )
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.tc_fun}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Text style={{fontSize: 18}}>常见问题</Text>
                        </TouchableOpacity>
                    </View>

                    {this.state.tasks.map((item) => this._taskCreate(item))}

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
