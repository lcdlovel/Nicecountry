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
	TouchableOpacity
} from 'react-native';
import global from "../../../utils/global/global";
import YgInput from '../../common/YgInput'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class EditScore extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			number:''
		}
	}
_dataLIst(url,editType){
		const {navigation} = this.props
		return(
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={()=>{
					navigation.navigate(url,{editType:editType})
				}}
				style={styles.item}>
				<View style={styles.item_left}>
					<View>
						<Text>核查调查表-某某市</Text>
						<Text style={styles.item_date}>2018-06-13-09:23:19</Text>
					</View>
				</View>
				<View style={styles.item_right}>
					<Text>未评分</Text>
				</View>
			</TouchableOpacity>
		)
}
	render() {
		return (
			<View style={styles.container}>
				<YgInput/>
				<View>
					<View style={styles.header}>
						<View style={styles.msg_left}>
							<Text>共计</Text>
							<Text>{this.state.number}</Text>
							<Text>份</Text>
						</View>
						<View style={styles.head_right}>
							<Text>筛选</Text>
							<View style={styles.nabla}></View>
						</View>
					</View>
					<View>
						{this._dataLIst('ScoreEdit')}
						{this._dataLIst('queryTabData')}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	nabla:{
		borderWidth:10,
		borderColor:'#000',
		borderLeftColor:'transparent',
		borderBottomColor:'transparent',
		borderRightColor:'transparent',
	},
	header:{
		flex:0,
		flexDirection:'row',
		justifyContent:'space-between',
		backgroundColor:'#fafafa',
		paddingLeft:20,
		paddingRight:20,
		height:40,
		alignItems:'center',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		shadowColor: 'gray',
		elevation: 2,
		marginTop:1,
		marginBottom:1
	},
	msg_left:{
		flex:0,
		flexDirection:'row',
	},
	head_right:{
		flex:0,
		flexDirection:'row',
	},
	item:{
		flex:0,
		justifyContent:'space-between',
		alignItems:'center',
		width:width,
		height:50,
		paddingLeft:22,
		paddingRight:22,
		flexDirection:'row',
		borderBottomWidth:0.5,
		borderBottomColor:global.commonCss.borderColor
	},
	item_date:{
		fontSize: 12,
		color: "#9c9c9c"
	},
	item_right:{

	},
	item_left:{

	}
});
