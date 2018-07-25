import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class TaskCard extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isFocused:false,
        }
    }
    componentWillReceiveProps(nextProps) {

        console.log(nextProps.isAllFocuse === this.state.isFocused)

        nextProps.isAllFocuse === this.state.isFocused?'':this.setState({isFocused:nextProps.isAllFocuse})

    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1}
                                  onPress={() => {
                                      this.setState({isFocused:!this.state.isFocused},function () {
                                          this.state.isFocused?'':this.props.cancelAllFocuse(this.state.isFocused)
                                      })

                                  }}
                >
                    <Text style={[styles.choose_card,this.state.isFocused?styles.isFocused:'']}>{this.props.cardName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor:"#ffffff"
    },
    /**
     * 各个选项卡的样式
     */
    choose_card: {
        marginTop: global.ScreenUtil.hTd(25),
        marginRight:global.ScreenUtil.pTd(30),
        borderWidth:global.ScreenUtil.pTd(2),
        borderRadius:3,
        borderColor:global.commonCss.borderColor,
        paddingLeft:global.ScreenUtil.pTd(16),
        paddingTop:global.ScreenUtil.hTd(15),
        paddingBottom:global.ScreenUtil.hTd(15),
        paddingRight:global.ScreenUtil.pTd(16),
        fontSize:16,
        color:global.commonCss.borderColor,
    },
    /**
     * 选中时的样式
     */
    isFocused:{
        borderColor:global.commonCss.mainColor,
        color:global.commonCss.mainColor
    }
});