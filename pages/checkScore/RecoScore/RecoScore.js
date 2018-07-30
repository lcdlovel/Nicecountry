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
import Point from '../../common/Point'
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class RecoScore extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}
_rowItem(url,name,navigate,titleName){
		const {navigation} = this.props
		return(
			<TouchableOpacity
				style={styles.row_item}
				onPress={()=>{
					navigation.navigate(navigate,{title:titleName})
				}}
			>
				<Image source={url} style={styles.item_img}/>
				<Text style={styles.item_name}>{name}</Text>
				<Point/>
			</TouchableOpacity>
		)
}
	render() {
		return (
			<View style={styles.container}>
				{this._rowItem(require('../../../assets/images/Assessmentscale.png'),'编辑分数','EditScore','编辑分数')}
				{this._rowItem(require('../../../assets/images/Assessmentscale.png'),'查看管辖','EditScore','管辖区域评分')}
				{this._rowItem(require('../../../assets/images/Assessmentscale.png'),'查看自身','SelfRating','自身评分')}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
    /**
	 * 每个item的总样式
     */
	row_item:{
		width:width,
		height:global.ScreenUtil.hTd(160),
		alignItems:'center',
		flex:0,
		flexDirection:'row',
		borderWidth:0.5,
		borderColor:global.commonCss.borderColor

	},
    /**
	 * item前的标志图
     */
	item_img:{
		width:global.ScreenUtil.pTd(60),
		height:global.ScreenUtil.hTd(60),
		marginLeft:15,
		marginRight:25
	},
    /**
	 * 考核评分表中的字体
     */
	item_name:{
		fontSize:17,
		marginRight:global.ScreenUtil.pTd(52),
	}
});
