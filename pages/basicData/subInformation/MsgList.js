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
import CrudApi from "../../../utils/request/crud";
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
			headList: this.props.navigation.state.params.headList,
			queryUrl: '',
			listData:'',
			navigation:''
		}
	}

	dataRequest(url, data) {
		return new Promise((resolve) => {
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
		let {requestUrl} = this.props.navigation.state.params
		switch (requestUrl){
			case 'PersonBaseInfo/findListByPage':
				this.setState({navigation:'OneCleanerMsg'})
				this.dataRequest(requestUrl,{
					regionId:global.User_msg.regionId,
					personTypeId:1
				}).then((res)=>{
					this.setState({listData:res.data.list})
				})
		}
	}

	_headRow() {
		return (
			<View>
				<View style={styles.bd_tabHead}>
					{this.state.headList.map(item => (<View style={styles.bd_tabItem}><Text>{item}</Text></View>))}
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
					navigation.navigate(this.state.navigation, {title: item.name, personData:item,})
				}}
			>
				<View style={styles.bd_tabContent}>
					<View style={styles.bd_tabItem}><Text>{item.name}</Text></View>
					<View style={styles.bd_tabItem}><Text>{item.sex ===1?'男':'女'}</Text></View>
					<View style={styles.bd_tabItem}><Text>{item.age}</Text></View>
				</View>
			</TouchableOpacity>
		)
	}

	render() {
		// [
		// 	{name: '洁白男', size: '男', number: 5, navigation: 'OneCleanerMsg'},
		// 	{name: '户数', size: '眺望户数', number: 6, navigation: 'OneCleanerMsg'},
		// 	{name: '合同', size: 205, number: 5, navigation: 'Contractor'},
		// 	{name: '洁白男', size: 265, number: 6},
		// ]
		return (
			<View style={styles.container}>
				<YgInput onChangeText={(val) => {
					this.setState({text: val})
				}}/>
				<FlatList
					data={this.state.listData}
					extraData={this.state.navigation}
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
	center: {},
	bd_tabContent: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		width: 1 / 3 * width,
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
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
		elevation: 4,
	},
});
