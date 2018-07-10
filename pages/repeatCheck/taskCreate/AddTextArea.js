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
	FlatList,
	ScrollView
} from 'react-native';
import YgInput from '../../common/YgInput'
import global from "../../../utils/global/global";
import CrudApi from "../../../utils/request/crud";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddTextArea extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			chose: '选择',
			listData: '',
			Group:''
		}
	}

	componentWillMount() {
		CrudApi.getInfo({
			url: 'Region/getAllByAdmin',
			data: {
				type: 'check'
			},
			callback: (res) => {
				this.setState({listData: res.data[0].regionTreeVoLst})
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{height:100}}>
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

				<View style={{paddingBottom:20}}>
						<FlatList
							ListFooterComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
							ItemSeparatorComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
							data={this.state.listData}
							renderItem={
								({item}) =>
									<View style={styles.item_style}>
										<View style={[styles.check_box, styles.item_check_box]}></View>
										<Text key={item.name}
													style={styles.item_text}
													onPress={(item) => {
														this.setState({Group:item.name})
													}}
										>{item.name}</Text>
									</View>
							}
						/>
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
	check_box: {
		width: 12,
		height: 12,
		borderWidth: 1,
		borderColor: 'gray',
		marginLeft: 12,
		marginRight: 6
	},
	check_Column: {
		flex: 0,
		flexDirection: 'row',
		height: 40,
		shadowColor: "rgba(182, 183, 185, 0.28)",
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 12,
		shadowOpacity: 1,
		elevation: 3,
		backgroundColor: '#ffffff',
		alignItems: 'center'
	},
	check_item: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center'
	},
	item_text: {
		fontSize: 15,
		height: 40,
		lineHeight: 40,
		// paddingLeft: 10
	},

	item_style: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center'
	},
	item_check_box: {
		marginRight: 6
	}
});
