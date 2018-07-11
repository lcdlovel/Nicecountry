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
import CrudApi from "../../../utils/request/crud";
import Point from '../../common/Point'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class SelfCheckTaskConfirm extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	getTaskData(url, data) {
		return new Promise(resolve => {
			CrudApi.getInfo({
				url: url,
				data: data,
				callback: (res) => {
					resolve(res)
				}
			})
		})
	}

	componentWillMount() {
		const {fromCheck} = this.props.navigation.state
		switch (fromCheck) {
			case 'checkTask':
				this.getTaskData('CheckInfo/findCheckInfo', {
					confirmState: 1,
					sendOrReceive: 0
				}).then(res => {
					console.log(res)
				})
				break;
			case  'SelfCheckTask':
				this.getTaskData('CheckInfoSelf/findCheckInfo', {
					confirmState: 2,
					sendOrReceive: 0
				}).then(res => {
					console.log(res)
				})
				break
		}
	}

	_contentConstractor() {
		const {navigation} = this.props
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={
					() => {
						navigation.navigate('TaskDetail')
					}
				}
			>
				<View style={styles.rc_content}>
					<View style={[styles.rc_conItem, styles.rc_content_first]}>
						<View>
							<Text style={styles.rc_Itemfont}>江苏省泰州市泰兴</Text>
							<Text style={styles.rc_Itemfont}>市滨江镇</Text>
							<Text style={styles.rc_Itemfont}>古兰村</Text>
						</View>
						<View style={styles.rc_ItemBottom}>
							<Text style={styles.rc_bottomFont}>2018-06-05</Text>
							<Text style={styles.rc_bottomFont}>17:03:02</Text>
						</View>
					</View>
					<View style={[styles.rc_itemOther, styles.rc_content_last]}>
						<Text style={styles.rc_Itemfont}>村办公室院内未清理，请去处理这些这些重要东西</Text>
					</View>
					<View style={styles.rc_last}>
						<Text style={styles.rc_task_asess}>好</Text>
						<Point/>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<View style={styles.rc_header}>
						<Text>发送地区名称</Text>
						<Text style={{marginLeft: 30}}>主题</Text>
					</View>
					{this._contentConstractor()}
					{this._contentConstractor()}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	rc_header: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		height: 30,
		backgroundColor: '#fff',
		marginTop: 8,
		paddingLeft: 20
	},
	rc_content: {
		flex: 0,
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#d4dcda'
	},
	rc_content_first: {
		marginLeft: 15
	},
	rc_conItem: {
		width: 0.4 * width,
	},

	rc_content_last: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	rc_Itemfont: {
		fontSize: 14,
		color: "#0c0c0c"
	},
	rc_ItemBottom: {
		marginTop: 10
	},
	rc_bottomFont: {
		fontSize: 10
	},
	rc_confirm: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4
	},
	rc_itemOther: {
		width: 0.4 * width
	},
	rc_last: {
		width: 0.1 * width,
		flex: 0,
		flexDirection: 'row',
		justifyContent:'flex-end',
		alignItems:'center'
	},
	rc_task_asess:{
		marginRight:2
	}
});