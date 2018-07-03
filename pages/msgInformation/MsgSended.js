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
	TouchableOpacity
} from 'react-native';
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class MsgSended extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			itemData:[
				{name:'密码修改',pointColor:false,navigation:'RevisePassWord'},
				{name:'二维码下载',pointColor:false,navigation:'QrCodeDown'},
				{name:'我的信息',pointColor:true,navigation:'MyMsg'}
			]
		}
	}

	_rowItem(item) {
		const {navigation} = this.props
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={()=>{
					navigation.navigate(item.navigation)
				}}
			>
			<View style={styles.my_item}>
				<View style={styles.my_item_left}>
					<View style={[styles.my_item_point , item.pointColor?styles.pointColor:'']}>
					</View>
					<Text style={styles.my_item_left}>{item.name}</Text>
				</View>
				<Image style={styles.my_item_arrow} source={require('../../assets/images/small-Return.png')}/>
			</View>
			</TouchableOpacity>
		)
	}

	render() {
		const {navigation} = this.props
		return (
			<View style={styles.container}>
				<View style={styles.my_head}>
					<Text style={{fontSize: 18, color: "#0c0c0c",}}>我的</Text>
				</View>
				<View style={styles.my_msg}>
					<View>
						<Image style={styles.my_head_img} source={require('../../assets/images/mainImg.png')}/>
						<Text style={{fontSize: 17, color: "#0c0c0c"}}>王小豆</Text>
						<Text style={{fontSize: 15, marginTop: 5, marginBottom: 25}}>南京市栖霞区鸿运家园保洁员</Text>
					</View>
					<View style={styles.my_head_right}>
						<View style={{paddingLeft: 15}}>
							<View style={styles.my_img}>
								<Image style={{width: 18, height: 18,}} source={require('../../assets/images/edit.png')}/>
							</View>
						</View>
						<View>
							<Text>编辑资料</Text>
						</View>
					</View>
				</View>
				<View style={{height: 30, backgroundColor: '#ffffff'}}>
				</View>
				<View style={styles.my_option}>

					<FlatList
						data={this.state.itemData}
						ItemSeparatorComponent={()=> <View style={styles.line}></View>}
						renderItem={({item}) => this._rowItem(item)}
					/>
					<TouchableOpacity
					activeOpacity={0.8}
					onPress={()=>{
						navigation.navigate('RevisePassWord')
					}}
					>
					<View style={styles.my_item}>
						<View style={styles.my_item_left}>
							<View style={[styles.my_item_point,styles.none]}></View>
							<Text style={styles.my_item_left}>退出登录</Text>
						</View>
						<Image style={[styles.my_item_arrow,styles.none]} source={require('../../assets/images/small-Return.png')}/>
					</View>
					</TouchableOpacity>
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
	my_head: {
		flex: 0,
		height: 50,
		width: width,
		// alignItems:'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		paddingLeft: 15
	},
	my_head_img: {
		width: 136,
		height: 70,

	},
	my_img: {
		width: 40,
		height: 30,
		borderRadius: 30,
		backgroundColor: '#87e7b2',
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	my_msg: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: '#ffffff',
		borderBottomWidth: 1,
		borderColor: '#e4e4e4'
	},
	my_option: {
		marginTop: 10,
		backgroundColor: '#ffffff'
	},
	my_item: {
		flex: 0,
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 15,
		paddingRight: 30,
	},
	my_item_arrow: {
		width: 8,
		height: 13,
	},
	my_item_point: {
		width: 5,
		height: 5,
		backgroundColor: global.commonCss.mainColor,
		borderRadius: 3,
		marginRight: 20
	},
	my_item_left: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	pointColor:{
		backgroundColor:'#f26b6a'
	},
	line:{
		height:1,
		backgroundColor:global.commonCss.borderColor
	},
	none:{
		opacity:0
	}
});
