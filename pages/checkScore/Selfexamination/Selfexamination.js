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
import global from "../../../utils/global/global";
import Point from '../../common/Point'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class Selfexamination extends Component<Props> {
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
				<View style={styles.container}>
					{this._rowItem(require('../../../assets/images/Assessmentscale.png'),'查看分数','OptRegion','选择区域')}
					{this._rowItem(require('../../../assets/images/Assessmentscale.png'),'编辑分数','EditScore','查看自查评分')}
				</View>
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
	row_item:{
		width:width,
		height:50,
		alignItems:'center',
		flex:0,
		flexDirection:'row',
		borderWidth:0.5,
		borderColor:global.commonCss.borderColor

	},
	item_img:{
		width:20,
		height:20,
		marginLeft:15,
		marginRight:25
	},
	item_name:{
		marginRight:10
	}
});
