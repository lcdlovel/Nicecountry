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
	ListView,
	FlatList,
	TouchableOpacity
} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import CrudApi from "../../utils/request/crud";
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};

export default class BasicData extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			tableHead: ['Head', 'Head2', 'Head3'],
			widthArr: [1 / 3 * width, 1 / 3 * width, 1 / 3 * width],
			header: this.props.navigation.state.params.info.headerList,
			listDataInfo:this.props.navigation.state.params.info.queryUrl,
			listData:''
		}
	}
	_rowItem(item) {
		const {isHaveSize} = this.props.navigation.state.params.info
		const {navigation} = this.props
		return (
			<TouchableOpacity
				key={item.name}
				activeOpacity={0.8}
				onPress={() => {
					navigation.navigate(item.navigation, {title:item.name ,url: item.queryUrl,headList:item.headList})
				}}
			>
				<View style={styles.bd_tabContent}>
					<View style={styles.bd_tabItem}><Text>{item.name}</Text></View>
					<View style={[styles.bd_tabItem,isHaveSize?'':styles.isHave]}><Text>{item.size + item.size_unit}</Text></View>
					<View style={styles.bd_tabItem}><Text>{item.count + item.count_unit}</Text></View>
				</View>
			</TouchableOpacity>
		)
	}
	baseMsgGet(url,data){
		return new Promise((resolve, reject)=>{
			CrudApi.getInfo({
				url:url,
				data:data,
				callback:(res)=>{
					resolve (res.data)
				}
			})
		})

	}

	componentWillMount() {
		switch (this.state.listDataInfo){
			case 'Region':
				let requireData = {
					regionId:global.User_msg.regionId,
				}
				this.baseMsgGet('Region/findRegionStatisticsByRegionId',requireData).then((res)=>{
					res.forEach((value)=>{
						value['navigation'] = 'BdArea'
					})
					this.setState({listData:res})
				})
				break;
			case 'PersonBaseInfo':
				this.baseMsgGet('PersonBaseInfo/findStatisticsByPTypeId',{
					regionId:global.User_msg.regionId,
				}).then(res=>{
					res.forEach((value)=>{
						value['navigation'] = 'AllCleaner'
					})
					this.setState({listData:res})
				})
				break;
			case 'BaseInfo':
				this.baseMsgGet('BaseInfo/findBaseInfoStatisticsByRegionId',{
					regionId:global.User_msg.regionId
				}).then(res=>{
					res.forEach((value)=>{
						value['navigation'] = 'MsgList'
						value['headList'] = ['名称','村名称','组名称']
					})
					this.setState({listData:res})
				})
				break;
			case 'ContractType':
				this.baseMsgGet('Contract/findListByCTypeIdAndRegionId',{
					regionId:global.User_msg.regionId,
					contractTypeId:global.Cleaner_ContractType
				}).then(res=>{
					res.forEach((value)=>{
						value['navigation'] = 'MsgList'
					})
					this.setState({listData:res})
				})
				break;
		}
	}
	_headerColumn(item) {
		return (
			<View style={styles.bd_tabItem} key={item}>
				<View style={styles.point}></View>
				<Text>{item}</Text>
			</View>
		)
	}
	_headRow() {
		return (
			<View>
				<View style={styles.bd_tabHead}>
					{this.state.header.map(item => this._headerColumn(item))}
				</View>
				<View style={styles.bd_headbtot}></View>
			</View>
		)
	}

	render() {
		const state = this.state;
		const {navigation} = this.props
		// const tableData = [];
		// for (let i = 0; i < 30; i += 1) {
		// 	const rowData = [];
		// 	for (let j = 0; j < 3; j += 1) {
		// 		rowData.push(`${i}${j}`);
		// 	}
		// 	tableData.push(rowData);
		// }

		return (
			//react-native-table-component试用
			/*<View style={styles.container}>
			<ScrollView horizontal={true}>
				<View>
					<Table borderStyle={{borderColor:'transparent',borderBottomColor: '#C1C0B9'}}>
						<Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
					</Table>
					<ScrollView style={styles.dataWrapper}>
						<Table borderStyle={{borderColor:'transparent',borderBottomColor: '#C1C0B9'}}>
							{
								tableData.map((rowData, index) => (
									<Row
										key={index}
										data={rowData}
										widthArr={state.widthArr}
										style={[styles.row,{backgroundColor: '#ffffff',borderBottomColor: '#C1C0B9'}]}
										textStyle={styles.text}
									/>
								))
							}
						</Table>
					</ScrollView>
				</View>
			</ScrollView>
		</View>*/
			<View style={styles.container}>
				<FlatList
					data={this.state.listData}
					ListHeaderComponent={() => this._headRow()}
					renderItem={({item}) => this._rowItem(item)}
					ItemSeparatorComponent={() => <View style={styles.line}></View>}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {flex: 1, backgroundColor: '#ffffff'},
	header: {height: 50, backgroundColor: '#E7E6E1'},
	text: {textAlign: 'center', fontWeight: '100'},
	dataWrapper: {marginTop: -1},
	row: {height: 40, backgroundColor: '#ffffff'},
	bd_tabHead: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 50,
		backgroundColor: '#fafafa',
	},
	bd_tabItem: {
		width: 1 / 3 * width,
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	point: {
		width: 5,
		height: 5,
		backgroundColor: global.commonCss.mainColor,
		borderRadius: 3,
		marginRight: 5
	},
	bd_tabContent: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent:'center',
		height: 50,
		backgroundColor: '#ffffff',
		// borderBottomWidth: 1,
		// borderBottomColor: '#E7E6E1'
	},
	line: {
		height: 1,
		backgroundColor: global.commonCss.borderColor
	},
	bd_headbtot: {
		height: 5,
		backgroundColor: '#f3f3f3'
	},
	isHave:{
		opacity:0
	}
});
