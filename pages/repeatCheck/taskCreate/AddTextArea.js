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
	View
} from 'react-native';
import YgInput	from '../../common/YgInput'
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddTextArea extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			chose:'选择'
		}
	}

	render() {
		return (
			<View style={styles.container}>
        <YgInput/>
				<View style={styles.check_Column}>
					<View style={styles.check_item}>
						<View style={styles.check_box}></View>
						<Text>全选</Text>
					</View>
					<View style={styles.check_item}>
						<View style={styles.check_box}></View>
						<Text>反选</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: global.commonCss.screenColor,
	},
	check_box:{
		width:12,
		height:12,
		borderWidth:1,
		borderColor:'gray',
		marginLeft:12,
		marginRight:6
	},
	check_Column:{
		flex:0,
		flexDirection:'row',
		height:40,
		shadowColor: "rgba(182, 183, 185, 0.28)",
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 12,
		shadowOpacity: 1,
		elevation:3,
		backgroundColor:'#ffffff',
		alignItems:'center'
	},
	check_item:{
		flex:0,
		flexDirection:'row',
		alignItems:'center'
	}
});
