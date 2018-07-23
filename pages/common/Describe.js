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
    ScrollView,
} from 'react-native';
import global from "../../utils/global/global";
const ReactNative = require('ReactNative');
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class Describe extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    _reset() {

        this.refs.scrollView.scrollTo({y: 0});

    }

    _onFocus(refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
                ReactNative.findNodeHandle(this.refs[refName]), 0, true);

        }, 100);
    }

    render() {
        return (
            <ScrollView
                ref="scrollView"
                style={{flex: 1}}
            >
            <View style={[styles.container, this.props.customStyle]}>
                <TextInput
                    ref='textInput'
                    onChangeText={this.props.changeDescribe}
                    style={[styles.describe, this.props.textInputStyle]}
                    multiline={true}
                    underlineColorAndroid='transparent'
                    maxLength={this.props.maxLength}
                    placeholder='请输入'
                    onBlur={this._reset.bind(this)}
                    onFocus={this._onFocus.bind(this,'textInput')}
                    // value={this.state.value}
                />
                <View style={styles.font_limit}>
                    <Text style={styles.limit_font}>{this.props.fontLength}/{this.props.maxLength}字!</Text>
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        zIndex: -1,
        alignItems: 'center',
        height: global.ScreenUtil.hTd(210),
        // paddingBottom:global.ScreenUtil.hTd(25),
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 11,
        shadowOpacity: 1,
        borderRadius: 7,
        marginBottom: global.ScreenUtil.hTd(30),
        paddingBottom: global.ScreenUtil.hTd(50)
    },
    describe: {
        paddingTop: 0,
        fontSize: 16,
        marginTop: global.ScreenUtil.hTd(26),
        marginLeft: global.ScreenUtil.pTd(23),
        width: 0.9 * width,
        backgroundColor: "#ffffff",
    },
    font_limit: {
        width: 0.9 * width,
        flex: 0,
        position: 'absolute',
        bottom: global.ScreenUtil.hTd(33),
        right: 5
    },
    limit_font: {
        textAlign: 'right',
        color: '#9c9c9c',
        paddingRight: global.ScreenUtil.pTd(38)
    }
});
