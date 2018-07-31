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
    TouchableOpacity,
    Image
} from 'react-native';
import Point from '../../common/Point'
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
let passWord = new Map()
export default class RevisePassWord extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: true,
            listData: [
                {name: '原密码', placeholder: '请输入', PassWord: 'oldPassWord',},
                {name: '新登录密码', placeholder: '请输入8位数密码', PassWord: 'newPassWord',},
                {name: '重复新密码', placeholder: '请输入8位数密码', PassWord: 'repeatPassWord',}
            ],
            passWord:new Map(),
            oldPassWord:'',
            newPassWord:'',
            repeatPassWord:''
        }
    }
    static navigationOptions = (props)=>{
        return{
            headerRight:(
                <Text
                    style={global.commonCss.confirm_btn}
                    onPress={()=>{}}
                >确认</Text>
            )
        }
    }
    valueChoose(){
        switch (item.name) {
            case '原密码':
                return this.state.oldPassWord
                break;
            case '新登录密码':
                return this.state.newPassWord
                break;
            case '重复新密码':
                return this.state.repeatPassWord
                break;
        }
    }
    /**
     * 行构造器
     * @param item
     * @returns {*}
     * @private
     */
    _rowItem(item) {
        return (
            <View style={styles.rp_item}>
                <View style={styles.rp_oneth}>
                    <Point/>
                    <Text style={styles.rp_name}>{item.name}</Text>
                </View>
                <View style={styles.nc_input}>
                    <TextInput placeholder='请输入'
                               placeholderTextColor='#9c9c9c'
                               style={styles.text_Input}
                               secureTextEntry={this.state.secureTextEntry}
                               underlineColorAndroid='transparent'
                               value={this.valueChoose.bind(this)}
                               onChangeText={(val)=>{
                                   this.setState((state)=>{
                                       state.passWord.set(item.name,val)
                                       passWord.set(item.name,val)
                                       switch (item.name) {
                                           case '原密码':
                                               break;
                                           case '新登录密码':
                                               break;
                                           case '重复新密码':
                                               break;
                                       }
                                   },()=>{
                                       console.log(this.state.passWord)
                                   })
                               }}
                    />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            passWord.set(item.name,'')
                            switch (item.name) {
                                case '原密码':
                                    this.setState({oldPassWord:''},()=>{
                                        console.log('原密码')
                                        console.log(this.state.oldPassWord)
                                    })
                                    break;
                                case '新登录密码':
                                    this.setState({newPassWord:''})
                                    break;
                                case '重复新密码':
                                    this.setState({repeatPassWord:''})
                                    break;
                            }
                            this.setState((state)=>{
                                const passWord = state.passWord
                                passWord.set(item.name,'')
                            },()=>{
                                console.log(this.state.passWord)
                            })
                        }}
                        >
                        <Image style={styles.manIocn} resizeMode='contain'
                               source={require('../../../assets/images/empty.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.listData.map((item) =>
                    this._rowItem(item)
                )}
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
     * 每一行的样式
     */
    rp_item: {
        paddingLeft: 15,
        marginTop: 15,
        height: global.ScreenUtil.hTd(138)
    },
    /**
     * 每一行的标题样式
     */
    rp_oneth: {
        flex: 0,
        // height: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: global.ScreenUtil.hTd(41)
    },
    /**
     * 标题字体的样式
     */
    rp_name: {
        fontSize: 18,
        color: global.commonCss.fontColor,
        marginLeft: 8
    },
    /**
     * 输入框的样式
     */
    text_Input: {
        fontSize:16,
        width: global.ScreenUtil.pTd(626),
        paddingBottom: 0
    },
    /**
     * 输入框的样式
     */
    nc_input: {
        flex: 0,
        marginLeft: 13,
        paddingBottom:global.ScreenUtil.hTd(16),
        flexDirection: 'row',
        alignItems: 'center',
        width: global.ScreenUtil.pTd(666),
        borderBottomWidth: 0.5,
        borderColor: global.commonCss.borderColor,
    },
    /**
     * 删除的图像
     */
    manIocn: {
        width: global.ScreenUtil.pTd(35),
        height: global.ScreenUtil.hTd(35),
        marginBottom: 0
    },
});
