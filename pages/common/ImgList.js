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
import Point from '../common/Point'
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class ImgList extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }

    componentWillUpdate() {

    }

    render() {
        const {imageList} = this.props
        const {titleStyle, imgsStyle, imgsName} = this.props
        return (
            <View style={styles.container}>
                <View style={[styles.item_header, titleStyle]}>
                    <Point pointColor={styles.pointColor}/>
                    <Text style={styles.header_text}>{imgsName ? imgsName : '照片详情'}</Text>
                </View>
                <View style={[styles.imgs, imgsStyle]}>
                    {imageList.map(item => (
                        <TouchableOpacity>
                            <Image source={item} style={[styles.example_img]}/>
                        </TouchableOpacity>))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: global.commonCss.screenColor,
        alignItems: 'center',
    },
    item_header: {
        flex: 0,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
        paddingLeft: 20
    },
    header_text: {
        fontSize: 17,
        color: "#0c0c0c",
        paddingLeft: 10
    },
    imgs: {
        width: 0.9 * width,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    example_img: {
        width: global.ScreenUtil.pTd(200),
        height: global.ScreenUtil.hTd(112),
        marginRight: 5,
        marginTop: 5
    }
});
