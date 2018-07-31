import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')
type Props = {};
export default class ItemEditScore extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            yes:false,
            no:false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item_name}>生活垃圾收集转运收集转运</Text>
                <View style={styles.item_choose}>
                    <View style={styles.item_options}>
                        <Text
                            style={styles.item_option}
                        >是</Text>
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({
                                   yes:!this.state.yes
                                },()=>{
                                    this.state.yes?this.setState({
                                        no:false
                                    }):''
                                })
                            }}
                        >
                            <Image style={[styles.option_box, styles.box]}
                                   source={this.state.yes?require('../../../assets/icons/true.png'):""}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item_options}>
                        <Text
                            style={[styles.item_option]}
                        >否</Text>
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({
                                    no:!this.state.no
                                },()=>{
                                    this.state.no?this.setState({
                                        yes:false
                                    }):''
                                })
                            }}
                        >
                            <Image style={[styles.option_box, styles.box]}
                                   source={this.state.no?require('../../../assets/icons/true.png'):""}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /**
     * 每一行的样式
     */
    container: {
        width: global.ScreenUtil.pTd(578),
        height: global.ScreenUtil.hTd(75),
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: global.commonCss.screenColor,
        borderBottomWidth: 0.5,
        borderColor: global.commonCss.borderColor
    },
    /**
     * item--名称
     */
    item_name: {
        width: global.ScreenUtil.pTd(337),
        marginLeft: global.ScreenUtil.pTd(27),
        fontSize: 11,
        color: global.commonCss.fontColor
    },
    /**
     * 选项
     */
    item_choose: {
        width: global.ScreenUtil.pTd(180),
        marginRight: global.ScreenUtil.pTd(32),
        flex: 0,
        flexDirection: 'row'
    },
    /**
     * item--选项
     */
    item_option: {
        flex: 0,
        flexDirection: 'row',
        fontSize: 11,
        color: global.commonCss.fontColor,
        marginRight: global.ScreenUtil.pTd(14)
    },
    /**
     * 选项框
     */
    option_box: {
        width: global.ScreenUtil.pTd(global.isIphoneX() ? 35 : 25),
        height: global.ScreenUtil.hTd(25)
    },
    /**
     * 双选框的样式
     */
    item_options: {
        width: global.ScreenUtil.pTd(67),
        marginLeft: global.ScreenUtil.pTd(24),
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    /**
     * 框
     */
    box: {
        width: global.ScreenUtil.pTd(32),
        height: global.ScreenUtil.hTd(global.isIphoneX() ? 28 : 32),
        borderWidth: global.ScreenUtil.pTd(1),
        borderColor: global.commonCss.borderColor,
    }
});