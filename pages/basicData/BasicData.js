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
	ListView
} from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
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
			widthArr: [1/3 * width, 1/3 * width, 1/3 * width]
		}
	}

	render() {
		const state = this.state;
		const tableData = [];
		for (let i = 0; i < 30; i += 1) {
			const rowData = [];
			for (let j = 0; j < 3; j += 1) {
				rowData.push(`${i}${j}`);
			}
			tableData.push(rowData);
		}
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
			<View>
				<View style={styles.bd_tabHead}>
					<View style={styles.bd_tabItem}><Text>名称</Text></View>
					<View style={styles.bd_tabItem}><Text>村村</Text></View>
					<View style={styles.bd_tabItem}><Text>大小</Text></View>
				</View>
				<View>
					<ScrollView>
						<View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View><View style={styles.bd_tabContent}>
							<View style={styles.bd_tabItem}><Text>找房</Text></View>
							<View style={styles.bd_tabItem}><Text>开心</Text></View>
							<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
						</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>
							<View style={styles.bd_tabContent}>
								<View style={styles.bd_tabItem}><Text>找房</Text></View>
								<View style={styles.bd_tabItem}><Text>开心</Text></View>
								<View style={styles.bd_tabItem}><Text>玩蛇</Text></View>
							</View>

						</View>
					</ScrollView>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: { flex: 1,backgroundColor: '#E7E6E1' },
	header: { height: 50, backgroundColor: '#E7E6E1' },
	text: { textAlign: 'center', fontWeight: '100' },
	dataWrapper: { marginTop: -1 },
	row: { height: 40, backgroundColor: '#ffffff' },
	bd_tabHead:{
		flex:0,
		flexDirection:'row',
		alignItems:'center',
		// justifyContent:'center',
		height: 50,
		backgroundColor: '#E7E6E1'
	},
	bd_tabItem:{
		width:1/3 * width,
		flex:0,
		// justifyContent:'center',
		alignItems:'center'
	},
	bd_tabContent:{
		flex:0,
		flexDirection:'row',
		alignItems:'center',
		// justifyContent:'center',
		height: 50,
		backgroundColor: '#ffffff',
		borderBottomWidth:1,
		borderBottomColor:'gray'
	}
});
