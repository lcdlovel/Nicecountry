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
    TextInput,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationActions} from 'react-navigation'
import loaderFun from './LoaderFun'
import global from "../../utils/global/global";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as types from '../../Redux/constans/loginType';
// import login from '../../Redux/actions/loginAction'
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')

type Props = {};
export default class Loader extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            secureTextEntry: true
        }
    }

    render() {
        const {navigation} = this.props
        const resetAction = NavigationActions.init({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Home',
                })
            ]
        })
        return (
            <View style={styles.container}>
                {/*图片*/}
                <Image style={styles.load_image} source={require('../../assets/images/loader_top.png')}/>
                {/*登录全部*/}
                <View style={styles.nc_inputView}>
                    {/*用户名输入框*/}
                    <View style={styles.nc_input}>
                        <Image style={styles.manIocn} resizeMode='contain'
                               source={require('../../assets/images/Sign_in.png')}/>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(username) => this.setState({username: username})}
                            placeholder='请输入用户名'
                            underlineColorAndroid='transparent'
                            value={this.state.username}
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                this.setState({username: ''})
                            }}>
                            <Image style={styles.manIocn} resizeMode='contain'
                                   source={require('../../assets/images/empty.png')}/>
                        </TouchableOpacity>
                    </View>
                    {/*密码输入框*/}
                    <View style={styles.nc_input}>
                        <Image style={styles.manIocn} resizeMode='contain'
                               source={require('../../assets/images/password.png')}/>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(password) => this.setState({password: password})}
                            placeholder='请输入密码'
                            secureTextEntry={this.state.secureTextEntry}
                            underlineColorAndroid='transparent'
                            value={this.state.password}
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                this.setState({secureTextEntry: !this.state.secureTextEntry})
                            }}
                        >
                            <Image style={styles.manIocn} resizeMode='contain'
                                   source={this.state.secureTextEntry ? require('../../assets/images/display.png') : require('../../assets/images/Donotdisplay.png')}/>
                        </TouchableOpacity>
                    </View>
                    {/*登录按钮*/}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.dispatch(resetAction)
                            // loaderFun.addData()
                            loaderFun.signIn(this.state).then((res) => {
                                if (res.status === 1) {
                                    alert(res.data)
                                }
                                navigation.navigate('HomePage')
                            })
                        }}>
                        <LinearGradient colors={['#70daad', '#8ae8b2', '#96efb4',]}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 0}}
                                        style={styles.load_btn}>
                            <Text style={styles.load_btn_font}>登录</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                {/*协议*/}
                <Text style={styles.proto_col}>已阅读并同意
                    <Text style={{color: global.commonCss.mainColor}}>《美丽乡村协议》</Text>!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#ffffff"
    },
    /**
     * 登陆图片
     */
    load_image: {
        width: width,
        height: global.ScreenUtil.hTd(global.isIphoneX()?400:300)
    },
    /**
     * 登录主页面
     */
    nc_inputView: {
        marginTop: global.ScreenUtil.hTd(200),
    },
    /**
     * 输入框样式
     */
    nc_input: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        // width: 300,
        height: global.ScreenUtil.pTd(50),
        paddingBottom:global.ScreenUtil.hTd(40),
        // borderRadius: 30,
        borderBottomWidth: 0.5,
        borderColor: global.commonCss.borderColor,
        marginTop: global.ScreenUtil.hTd(56),
    },
    /**
     * 输入框内的图片
     */
    manIocn: {
        width: 20,
        height: 20,
    },
    /**
     * 输入框的样式
     */
    textInput: {
        height: global.ScreenUtil.hTd(40),
        width: width * 0.7,
        paddingLeft: global.ScreenUtil.pTd(8),
        fontSize: global.commonCss.mainFontSize
    },
    /**
     * 登录按钮内的字体
     */
    load_btn_font: {
        fontFamily: global.commonCss.fontFamily,
        fontSize: 27,
        color: "#ffffff"
    },
    /**
     * 登录按钮
     */
    load_btn: {
        marginTop: global.ScreenUtil.hTd(200),
        height: global.ScreenUtil.hTd(90),
        borderRadius: 30,
        backgroundColor: '#14c5a0',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    /**
     * 协议文字
     */
    proto_col: {
        width: width,
        fontFamily: global.commonCss.fontFamily,
        fontWeight: '100',
        fontSize: 12,
        textAlign: 'center',
        marginTop: global.ScreenUtil.hTd(10)

    }
});

