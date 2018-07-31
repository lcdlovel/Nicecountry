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
    ScrollView,
    TouchableOpacity
} from 'react-native';
import ShowDetailMsg from '../common/ShowDetailMsg'
import ImgList from "../common/ImgList";
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class TaskDetail extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log(this.props.navigation.state.params)
    }

    static navigationOptions = (props) => {
        const {navigation} = props
        const {params} = navigation.state
        // console.log(type)
        return {
            headerRight: (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.navigate('ReplyInformation')
                        console.log(navigation)
                    }}>
                    <Text style={global.commonCss.confirm_btn}>{params.type === 'received' ? '回复' : ''}</Text>
                </TouchableOpacity>
            )
        }
    }

    render() {
        const {params} = this.props.navigation.state
        return (
            <ScrollView style={styles.container}>
                <View>
                    <ShowDetailMsg detailMsg={params.data} DataType={params.DataType}/>
                    <ImgList imageList={params.data.fileURLList}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: global.commonCss.screenColor,
    },

});
