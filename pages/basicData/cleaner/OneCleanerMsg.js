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
	ScrollView,
	TouchableOpacity
} from 'react-native';
import ShowDetailMsg from '../../common/ShowDetailMsg'
import ShowExtraMsg from '../../common/ShowExtraMsg'
import global from "../../../utils/global/global";

//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')
type Props = {};
export default class OneCleanerMsg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const {navigation} = this.props
		const {personData,DataType} = this.props.navigation.state.params
		return (
			<ScrollView style={styles.container}>
				<View>
					<ShowDetailMsg detailMsg={personData} DataType={DataType}/>
					<View style={[styles.contract,DataType === 'baseInfo'?styles.none:'']}>
						<View style={styles.main_msg}>
							<Image source={require('../../../assets/images/sign.png')} style={styles.sign}/>

							<View style={[styles.contractMsg]}>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => {
										navigation.navigate('ContractorList', {
											title: '合同列表',
											info: {headerList: ['名称', '村名称', '组名称']},
											requestData: personData
										})
									}}
								>
									<View style={styles.msg_one}>
										<Image source={require('../../../assets/report/Assessmentscale.png')} style={styles.msg_img}/>
										<Text style={styles.constractOpa}>查看</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => {
										navigation.navigate('AddContractor', {title: this.props.navigation.state.params.title,showData:personData})
									}}>
									<View style={styles.msg_one}>
										<Image source={require('../../../assets/report/Assessmentscale.png')} style={styles.msg_img}/>
										<Text style={styles.constractOpa}>添加</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<ShowExtraMsg>

					</ShowExtraMsg>
					{/*<View style={styles.contract_extra}>*/}
					{/*<View style={styles.extraMsg}>*/}

					{/*</View>*/}
					{/*</View>*/}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		// minHeight:height,
		paddingBottom: global.isIphoneX()?30:20
	},
	main_msg: {
		width: 0.9 * width,
		borderRadius: 6,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom:1,
		backgroundColor: '#ffffff',
		paddingTop: 20,
		paddingBottom: 20,
		// position: 'absolute',
		// top: 20,
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 10,
		shadowOpacity: 1,
		elevation: 1,
	},
	sign: {
		width: 29,
		height: 36,
		position: 'absolute',
		top: 0,
		left: 15
	},
	contract: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
		marginTop: 15
	},
	contractMsg: {
		flex: 0,
		width: 0.9 * width,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	msg_img: {
		width: 50,
		height: 40
	},
	msg_one: {
		flex: 0,
		width: 0.3 * width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	extraMsg: {
		width: 0.9 * width,
		borderRadius: 6,
		flex: 0,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 10,
		shadowOpacity: 1,
		elevation: 1,
	},
	contract_extra: {
		flex: 0,
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
	},
	none:{
		display:'none'
	},
    /**
	 * 对合同操作的字体
     */
    constractOpa:{
    	fontSize:16
	}
});
