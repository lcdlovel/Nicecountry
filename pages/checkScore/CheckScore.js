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
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class CheckScore extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
            module:[]
		}
	}
	componentWillMount(){
		this._module()
	}
	_module(){
		this.setState({
			module:[
				{
					moduleImg:require('../../assets/images/Assessmentscale.png'),
					name:'考核评分表',
					route:'RecoScore'
				},
                {
                    moduleImg:require('../../assets/images/Self-examinationscoretable.png'),
                    name:'自查评分表',
                    route:'RecoScore'
                },
                {
                    moduleImg:require('../../assets/narmal/Falsification.png'),
                    name:'弄虚作假',
                    route:'RecoScore'
                },
                {
                    moduleImg:require('../../assets/narmal/Harnessthestubborndisease.png'),
                    name:'治理顽疾',
                    route:'RecoScore'
                },
			]
		})
	}
	_rowconstrutor(item){
		const {navigation} = this.props
		return(
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() =>
					navigation.navigate(item.route,{name:item.name})
				}>
				<View style={styles.ck_row}>
					<View style={styles.ck_item}>
						<Image style={styles.ck_png} source={item.moduleImg}/>
						<View style={styles.line}></View>
						<Text style={styles.ck_font}>{item.name}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
	render() {
		return (
			<View style={styles.container}>
				{this.state.module.map(item=>this._rowconstrutor(item))}
				{/*{this._rowconstrutor(require('../../assets/images/Assessmentscale.png'),'考核评分表','RecoScore')}*/}
				{/*{this._rowconstrutor(require('../../assets/images/Self-examinationscoretable.png'),'自查评分表','Selfexamination')}*/}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#FFFFFF'
	},
    /**
	 * 模块框的样式
     */
	ck_item:{
		marginTop:global.ScreenUtil.hTd(22),
		marginBottom:2,
		flex:0,
		width:global.ScreenUtil.pTd(696),
		alignItems:'center',
		justifyContent:'center',
		height: global.ScreenUtil.hTd(252),
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(68, 65, 65, 0.2)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 12,
        shadowOpacity: 1
	},
    /**
	 * 图片大小
     */
	ck_png:{
		width: global.ScreenUtil.pTd(204),
		height: global.ScreenUtil.hTd(125)
	},
    /**
	 * 图片下的字体
     */
	ck_font:{
		marginLeft:10,
		fontSize: 18,
		color: global.commonCss.mainColor
	},
	ck_row:{
		flex:0,
		justifyContent:'center',
		alignItems:'center',
		width:width
	},
	arrow:{
		width: 10,
		height: 16,
		transform: [{rotate:'-90deg'}],
		marginRight:25
	},
    /**
	 * 中间线的样式
     */
	line:{
		width:global.ScreenUtil.pTd(600),
		marginTop:15,
		marginBottom:15,
		height:0.7,
		backgroundColor:global.commonCss.borderColor
	}
});
