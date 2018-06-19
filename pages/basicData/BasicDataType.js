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
	FlatList,
	TouchableHighlight
} from 'react-native';
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')
type Props = {};
export default class BasicDataType extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	_dataListItem(item) {
		return (
			<TouchableHighlight activeOpacity={0.8} style={styles.basic_type} key={item.name}>
				<View>
					<View style={styles.basic_imgModule}>
						<Image resizeMode='cover' source={item.url} style={styles.basic_img}/>
					</View>
					<View style={styles.basic_line}></View>
					<Text style={styles.basic_font}>{item.name}</Text>
				</View>
			</TouchableHighlight>
		)
	}

	_separator() {
		return (
			<View style={{height:5}}></View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.basic_top}>
					<Image resizeMode='cover' source={require('../../assets/images/basicDataType.png')} style={styles.basic_top}/>
				</View>
				<View style={styles.basic_module}>
					<FlatList
						ItemSeparatorComponent={this._separator}
						data={[
							{url: require('../../assets/images/Regionalbaseinformation.png'), navigation: '', name: '区域基础信息'},
							{url: require('../../assets/images/Staffinginformation.png'), navigation: '', name: '人员基础信息'},
							{url: require('../../assets/images/Generalbasicinformation.png'), navigation: '', name: '普通基础信息'},
							{url: require('../../assets/images/Nodataavailable.png'), navigation: '', name: '暂无'},
						]}
						renderItem={({item}) => this._dataListItem(item)}
						columnWrapperStyle={{paddingLeft:5}}
						numColumns={2}
					>
					</FlatList>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
	},
	basic_top: {
		width: width,
		height: 0.3 * height
	},
	basic_type: {
		width:0.45 * width,
		marginRight:5,
		marginTop:6,
		marginBottom:6,
		flex: 0,
		justifyContent: 'center',
		alignItems:'center',
		height:150,
		backgroundColor: '#ffffff',
		borderRadius:10,
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		shadowColor: 'gray',
		elevation:4,
	},
	basic_module: {
		flex: 0,
		marginTop:7,
		justifyContent: 'center',
		alignItems:'center',

	},
	basic_line: {
		width:0.3 * width,
		height:2,
		backgroundColor:global.commonCss.borderColor,
		marginTop:15
	},
	basic_img: {
		width: 50,
		height: 50,
	},
	basic_font:{
		textAlign:'center',
		marginTop:10
	},
	basic_imgModule:{
		flex:0,
		justifyContent:'center',
		alignItems:'center'
	}
});
