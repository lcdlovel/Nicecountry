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
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AffirmTask extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			listData:[]
		}
	}
	getTaskData(url,data){
		return new Promise(resolve => {
			CrudApi.getInfo({
				url:url,
				data:data,
				callback:(res)=>{
					resolve(res)
				}
			})
		})
	}
	componentWillMount(){
		const {fromCheck} = this.props.navigation.state.params
		switch (fromCheck){
			case 'checkTaskReceived':
				this.getTaskData('CheckInfo/findCheckInfo',{
					confirmState:2,
					sendOrReceive:1
				}).then(res=>{
					this.setState({listData:res.data.list},()=>{
						console.log(this.state.listData)
					})
				})
				break;
			case 'checkTaskSended':
				this.getTaskData('CheckInfo/findCheckInfo',{
					confirmState:2,
					sendOrReceive:0
				}).then(res=>{
					this.setState({listData:res.data.list},()=>{
						console.log(this.state.listData)
					})
				})
				break;
			case  'SelfCheckTask':
				this.getTaskData('CheckInfoSelf/findCheckInfo',{
					confirmState:2,
					sendOrReceive:0
				}).then(res=>{
					this.setState({listData:res.data.list},()=>{
						console.log(this.state.listData)
					})
				})
				break
		}
	}
	_contentConstractor(item) {
		const {navigation} = this.props
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={
					()=>{
						navigation.navigate('TaskDetail')
					}
				}
			>
				<View style={styles.rc_content}>
					<View style={[styles.rc_conItem, styles.rc_content_first]}>
						<View>
							<Text style={styles.rc_Itemfont}>{item.sendRegionName}</Text>
						</View>
						<View style={styles.rc_ItemBottom}>
							<Text style={styles.rc_bottomFont}>{item.createTime.slice(0,10)}</Text>
							<Text style={styles.rc_bottomFont}>{item.createTime.slice(11,-2)}</Text>
						</View>
					</View>
					<View style={[styles.rc_itemOther, styles.rc_content_last]}>
						<Text style={styles.rc_Itemfont}>{item.theme.slice(1,-1)}</Text>
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
						<Text style={{fontSize:18}}>发送地区名称</Text>
						<Text style={{marginLeft: 30,fontSize:18}}>主题</Text>
					</View>
					{this.state.listData.map(item => this._contentConstractor(item))}
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
    /**
     * 头部主题模块
     */
    rc_header: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: global.ScreenUtil.hTd(100),
        backgroundColor: '#fff',
        marginTop: 8,
        paddingLeft: 20
    },
    /**
     * 信息模块一条信息的样式
     */
    rc_content: {
        flex: 0,
        flexDirection: 'row',
        height: global.ScreenUtil.hTd(140),
        alignItems:'center',
        // marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d4dcda'
    },
	rc_content_first: {
		marginLeft: 15
	},
	rc_conItem: {
		width: 1 / 3 * width,
	},

	rc_content_last: {
		alignItems: 'center',
		justifyContent: 'center'
	},
    /**
     * 信息字体
     */
    rc_Itemfont: {
        fontSize: 15,
        color: "#0c0c0c"
    },
	rc_ItemBottom: {
		marginTop: 10
	},
    /**
     * 时间的字体
     */
    rc_bottomFont: {
        fontSize: 13
    },
	rc_confirm: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4
	},
	rc_itemOther: {
		width: 0.7 * width
	}
});