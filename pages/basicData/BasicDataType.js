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
let {width, height} = dimensions.get('window')
type Props = {};
export default class BasicDataType extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

    /**
	 * 各区域模块 构造函数
     */
	_dataListItem(item) {
		const {navigation} = this.props
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				style={styles.basic_type}
				onPress={() => {
					navigation.navigate('BasicData', {title: item.name, info: item.message})
				}}
				key={item.name}>
				<View>
					<View style={styles.basic_imgModule}>
						<Image resizeMode='cover' source={item.url} style={styles.basic_img}/>
					</View>
					<View style={styles.basic_line}></View>
					<Text style={styles.basic_font}>{item.name}</Text>
				</View>
			</TouchableOpacity>
		)
	}

	_separator() {
		return (
			<View style={{height: global.ScreenUtil.hTd(10)}}></View>
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
						style={styles.flat_list}
						ItemSeparatorComponent={this._separator}
						data={[
							{
								url: require('../../assets/images/Regionalbaseinformation.png'),
								navigation: 'BasicData',
								name: '区域基础信息',
								message: {
									headerList: ['名称', '尺寸', '数量'],
									isHaveSize: true,
									queryUrl:'Region'
								}
							},
							{
								url: require('../../assets/images/Staffinginformation.png'),
								navigation: 'BasicData',
								name: '人员基础信息',
								message: {
									headerList: ['名称', '数量'],
									isHaveSize: false,
									queryUrl:'PersonBaseInfo'
								}
							},
							{
								url: require('../../assets/images/Generalbasicinformation.png'),
								navigation: '',
								name: '普通基础信息',
								message: {
									headerList: ['名称', '尺寸', '数量'],
									isHaveSize: true,
									queryUrl:'BaseInfo'
								}
							},
							{
								url: require('../../assets/images/Basicinformationofcontract.png'),
								navigation: '',
								name: '合同基础信息',
								message: {
									headerList: ['名称', '数量'],
									queryUrl:'ContractType',
									isHaveSize: false,
								},
							},
						]}
						renderItem={({item}) => this._dataListItem(item)}
						columnWrapperStyle={{paddingLeft: 5}}
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
		backgroundColor: global.commonCss.screenColor,
	},
    /**
	 * 上方图片样式
     */
	basic_top: {
		width: width,
		height: global.ScreenUtil.hTd(415)
	},
    /**
	 * 各个模块的总样式
     */
	basic_type: {
		width: global.ScreenUtil.pTd(343),
		marginRight: global.ScreenUtil.pTd(10),
		// marginTop: 6,
		// marginBottom: 6,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		height: global.ScreenUtil.hTd(278),
		backgroundColor: global.commonCss.screenColor,
		borderRadius: 10,
        shadowColor: "rgba(68, 65, 65, 0.2)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 12,
        shadowOpacity: 1
		// elevation: 4,
	},
    /**
	 * 列表的整体样式
     */
	basic_module: {
		flex: 1,
		// paddingTop: 7,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
    /**
	 * 模块内的线的样式
     */
	basic_line: {
		width: global.ScreenUtil.pTd(283),
		height: 2,
		backgroundColor: global.commonCss.borderColor,
		marginTop: global.ScreenUtil.hTd(43),
		marginBottom:global.ScreenUtil.hTd(26)
	},
    /**
	 * 模块内的图片样式
     */
	basic_img: {
		width: global.ScreenUtil.pTd(global.isIphoneX()?120:100),
		height: global.ScreenUtil.hTd(100),
	},
    /**
	 * 模块名称样式（文字）
     */
	basic_font: {
		textAlign: 'center',
		fontSize:global.commonCss.primaryFontSize
	},
    /**
	 * 各模块的样式
     */
	basic_imgModule: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
    /**
	 * 整个列表的样式
     */
    flat_list:{
    	paddingTop:global.ScreenUtil.hTd(20),
		paddingLeft:global.ScreenUtil.pTd(17),
        paddingRight:global.ScreenUtil.pTd(27)

	}
});
