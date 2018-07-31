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
    TouchableOpacity
} from 'react-native';
import TaskCreate from "./taskCreate/TaskCreate";
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')

type Props = {};
export default class Check extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            module: []
        }
    }

    componentWillMount() {
        this._module()
    }

    /**
     * 路由跳转函数
     * @param route
     * @param name
     * @param type
     */
    jumpRouter(route, name, type) {
        const {navigation} = this.props
        navigation.navigate(route, {fromCheck: type, title: '检查'})
    }

    /**
     *模块构造函数
     */

    _rowconstrutor(item) {
        // console.log(item)
        return (
            <TouchableOpacity
                activeOpacity={0.8}

                onPress={() => {
                    this.jumpRouter(item.route, item.name, item.dataType)
                }}>
                <View style={styles.ck_row}>
                    <View style={styles.ck_item}>
                        <Image style={styles.ck_png} source={item.moduleImg}/>
                    </View>
                    <Text style={styles.ck_font}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _module() {
        if (global.User_msg.regionCategoryId === 6) {
            this.setState({
                module: [
                    {
                        moduleImg: require('../../assets/images/Receivedtask.png'),
                        name: '已接受任务',
                        route: 'CheckReceviedCheck',
                        dataType: 'checkTaskReceived'
                    }
                ]
            },()=>{
                console.log('村级')
            })
        } else {
            this.setState({
                module: [
                    {
                        moduleImg: require('../../assets/images/Createatask.png'),
                        name: '创建任务',
                        route: 'TaskCreate',
                        dataType: ''
                    },
                    {
                        moduleImg: require('../../assets/images/Receivedtask.png'),
                        name: '已接受任务',
                        route: 'CheckReceviedCheck',
                        dataType: 'checkTaskReceived'
                    },
                    {
                        moduleImg: require('../../assets/images/Senttask.png'),
                        name: '已发送任务',
                        route: 'CheckReceviedCheck',
                        dataType: 'checkTaskSended'
                    }
                ]
            },()=>{
                console.log('村级以上')
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.module.map(item => this._rowconstrutor(item))}
                {/*{this._rowconstrut、or(require('../../assets/images/Createatask.png'), '创建任务', 'TaskCreate')}*/}
                {/*{this._rowconstrutor(require('../../assets/images/Receivedtask.png'), '已接受任务', 'CheckReceviedCheck', 'checkTaskReceived')}*/}
                {/*{this._rowconstrutor(require('../../assets/images/Senttask.png'), '已发送任务', 'CheckReceviedCheck', 'checkTaskSended')}*/}
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: global.commonCss.screenColor,
        },
        ck_item: {
            flex: 0,
            alignItems: 'center',
            paddingLeft: 20,
            flexDirection: 'row',
            height: 45,
        },
        ck_png: {
            width: 53,
            height: 35,
        },
        ck_font: {
            marginLeft: 10,
            fontSize: 18,
            color: "#313735"
        },
        ck_row: {
            flex: 0,
            flexDirection: 'row',
            // justifyContent:'center',
            width: 0.9 * width,
            height: 70,
            paddingLeft: 15,
            alignItems: 'center',
            borderRadius: 7,
            backgroundColor: "#ffffff",
            shadowColor: "rgba(68, 68, 68, 0.2)",
            shadowOffset: {
                width: 0,
                height: 0
            },
            elevation: 2,
            shadowRadius: 8,
            shadowOpacity: 1,
            marginTop: 10,
            marginBottom: 6,
            marginLeft: 4,
            marginRight: 4
        },
        arrow: {
            width: 10,
            height: 16,
            transform: [{rotate: '-90deg'}],
            marginRight: 25
        }
    });
