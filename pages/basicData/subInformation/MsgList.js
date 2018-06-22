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
	TouchableOpacity,
	FlatList
} from 'react-native';
import YgInput from '../../common/YgInput'
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class MsgList extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		}
	}
	_headRow() {
		return (
			<View>
				<View style={styles.bd_tabHead}>
					<View style={styles.bd_tabItem}><Text >姓名</Text></View>
					<View style={styles.bd_tabItem}><Text >性别</Text></View>
					<View style={styles.bd_tabItem}><Text >年龄</Text></View>
				</View>
			</View>
		)
	}
	_rowItem(item) {
		const {navigation} = this.props
		return (
			<TouchableOpacity
				key={item.name}
				activeOpacity={0.8}
				onPress={() => {
					navigation.navigate(item.navigation, {title:item.name ,url: 'area'})
				}}
			>
				<View style={styles.bd_tabContent}>
					<View style={styles.bd_tabItem}><Text>{item.name}</Text></View>
					<View style={styles.bd_tabItem}><Text>{item.size}</Text></View>
					<View style={styles.bd_tabItem}><Text>{item.number}岁</Text></View>
				</View>
			</TouchableOpacity>
		)
	}
	render() {
		return (
			<View style={styles.container}>
				<YgInput onChangeText={(val) => {
					this.setState({text: val})
				}}/>
				<FlatList
					data={[
						{name: '洁白男', size: '男', number: 5,navigation:'OneCleanerMsg'},
						{name: '洁白男', size: 215, number: 6},
						{name: '洁白男', size: 205, number: 5},
						{name: '洁白男', size: 265, number: 6},
					]}
					ListHeaderComponent={() => this._headRow()}
					renderItem={({item}) => this._rowItem(item)}
					ItemSeparatorComponent={() => <View style={styles.line}></View>}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	center:{

	},
	bd_tabContent: {
		flex: 0,
		flexDirection: 'row',
		justifyContent:'space-between',
		height: 50,
		backgroundColor: '#ffffff',
		// borderBottomWidth: 1,
		// borderBottomColor: '#E7E6E1'
	},
	line: {
		height: 1,
		backgroundColor: global.commonCss.borderColor
	},
	bd_tabItem: {
		width:1/3 * width,
		flex: 0,
		flexDirection: 'row',
		justifyContent:'center',
		alignItems: 'center',
	},
	bd_tabHead: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 50,
		backgroundColor: '#fafafa',
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 15,
		shadowOpacity: 1,
		elevation:4,
	},
});
