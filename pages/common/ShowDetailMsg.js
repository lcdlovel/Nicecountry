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
	Image
} from 'react-native';
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient';
import global from "../../utils/global/global";

type Props = {};
export default class ShowDetailMsg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			listData: [
				{title: '村名称', content: '大马庄村代码村字多啊'},
				{title: '组名称', content: '本村'},
				{title: '报告人', content: '5sl001'},
				{title: '姓名', content: '解百女'},
				{title: '性别', content: '女'},
				{title: '年龄', content: '61岁'},
				{title: '文化水平', content: '小学'},
				{title: '性质', content: '困难户'},
			]
		}
	}

	_itemList(item) {
		return (
			<View style={styles.msg_item}>
				<View style={styles.item_column}>
					<View style={styles.circle_dot}></View>
					<Text style={styles.item_title}>{item.title}</Text>
				</View>
				<View><Text style={styles.item_content}>{item.content}</Text></View>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<LinearGradient colors={['#70daad', '#8ae8b2', '#96efb4',]}
												start={{x: 0, y: 0}}
												end={{x: 1, y: 0}}
												style={styles.bac_head}>
				</LinearGradient>
				<View style={styles.main_msg}>
					<Image source={require('../../assets/images/sign.png')} style={styles.sign}/>
					{this.state.listData.map(item => this._itemList(item))}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	bac_head: {
		width: width,
		height: 0.25 * height,
		backgroundColor: global.commonCss.mainColor
	},
	sign: {
		width: 29,
		height: 36,
		position: 'absolute',
		top: 0,
		left: 15
	},
	main_msg: {
		width: 0.9 * width,
		borderRadius: 6,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		paddingTop: 20,
		paddingBottom: 20,
		marginTop: -0.2 * height
	},
	circle_dot: {
		width: 7,
		height: 7,
		borderRadius: 4,
		backgroundColor: "#f5d44f"
	},
	msg_item: {
		width: 0.6 * width,
		flex: 0,
		justifyContent: 'space-between'
	},
	item_column: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5
	},
	item_title: {
		marginLeft: 8,
		fontSize: 15,
		fontWeight: '400',
		color: "#0c0c0c",
	},
	item_content: {
		fontSize: 14,
		fontWeight: '100',
		color: "#0c0c0c",
		marginLeft: 17,
		marginTop: 5
	}
});