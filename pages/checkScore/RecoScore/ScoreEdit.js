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
import Point from '../../common/Point'
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';
import global from "../../../utils/global/global";
import ItemEditScore from './ItemEditScore'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class ScoreEdit extends Component<Props> {
	popupDialog;
	constructor(props) {
		super(props);
		this.state = {
			areaMsg:''
		}
	}

    /**
	 * 页面右部确认字体
     */
    static navigationOptions = (props)=>{
        const {params} = props.navigation.state
    	return{
    		headerRight:(
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={()=>
						console.log(params)
					}
				>
					<Text style={global.commonCss.confirm_btn}>确认</Text>
				</TouchableOpacity>
			)
		}
	}
	componentWillMount(){
        const {params} = this.props.navigation.state
        console.log(params)
	}
    /**
	 * 一行数据的显示
     * @returns {*}
     * @private
     */
	_rowItem() {
		return(
			<TouchableOpacity
				style={styles.item_row}
				onPress={()=>{
					this.popupDialog.show()
				}}
			>
				<Text style={styles.item_font}>生活垃圾收集转运(20分)</Text>
				<View style={styles.isRead}>
					<Text style={[styles.item_font,styles.read_state]}>已读</Text>
					<Point pointColor={styles.pointColor}/>
				</View>

			</TouchableOpacity>
		)
	}

	render() {
		const slideAnimation = new SlideAnimation({slideFrom: 'bottom',});
		return (
			<View style={styles.container}>
				<View style={styles.head_row}>
					<Text style={styles.title_name}>
						核查调查表-{}
					</Text>
				</View>
				<View>
					{this._rowItem()}
				</View>
				<PopupDialog
					ref={(popupDialog) => {this.popupDialog = popupDialog;}}
					dialogAnimation={slideAnimation}
					width={0.7}
					height={0.3}
					dialogStyle={styles.dog_style}
                    overlayBackgroundColor='transparent'
				>
					<View style={{height:global.ScreenUtil.hTd(798)}}>
						<View style={styles.item_header}>
                            <Text style={styles.item_name}>生活垃圾收集转运(20分)</Text>
						</View>

						<ItemEditScore/>

						<View style={styles.item_bottom}>
							<TouchableOpacity
                                onPress={()=>{
                                    this.popupDialog.dismiss()
                                }}
							>
                                <Text style={styles.item_bottom_font} >取消</Text>
							</TouchableOpacity>

							<View style={styles.verticalLine}></View>
							<Text style={styles.item_bottom_font}>确认</Text>
						</View>
					</View>
				</PopupDialog>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
    /**
	 * 头部样式
     */
	head_row: {
		height: global.ScreenUtil.hTd(101),
		width: width,
		paddingLeft: 15,
		backgroundColor: '#fafafa',
		justifyContent: 'center',
		shadowOffset: {width: 0, height: 0.5},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		shadowColor: 'gray',
		elevation: 2,
		marginTop: 1,
		marginBottom: 1
	},
    /**
	 * 头部标题
     */
	item_row:{
		height:global.ScreenUtil.hTd(101),
		flex:0,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingLeft:15,
		paddingRight:15,
		borderWidth:0.5,
		borderColor:global.commonCss.borderColor
	},
    /**
	 * 头部标题字体
     */
    title_name:{
    	fontSize:18,
		color:global.commonCss.fontColor
	},
    /**
	 * item的字体
     */
    item_font:{
    	fontSize:16,
		color:global.commonCss.fontColor
	},
    /**
	 * 是否已读的状态
     */
    read_state:{
    	marginRight:global.ScreenUtil.pTd(10)
	},
	isRead:{
		flex:0,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	pointColor:{
		backgroundColor:'#ff3948'
	},
    /**
	 * 对话框的样式
     */
    dog_style:{
		borderRadius:0,
		backgroundColor:global.commonCss.screenColor,
        shadowColor: "#dddddd",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 10,
        shadowOpacity: 1,
		position:'relative',
		width:global.ScreenUtil.pTd(578),
		height:global.ScreenUtil.hTd(798),
		top:global.ScreenUtil.hTd(-160)
	},
    /**
	 * item-name
     */
    item_name:{
		height:global.ScreenUtil.hTd(88),
		lineHeight:global.ScreenUtil.hTd(88),
		fontSize:15,
		color:global.commonCss.fontColor,
		paddingLeft:global.ScreenUtil.pTd(28)
	},
    /**
	 * 线
     */
    line:{
        width:global.ScreenUtil.pTd(578),
		height:1
	},
    /**
	 * 头部字体
     */
    item_header:{
    	borderBottomWidth:global.ScreenUtil.hTd(1),
		borderColor:global.commonCss.borderColor
	},
    /**
	 * 底部样式
     */
    item_bottom:{
    	borderTopWidth:0.5,
		borderColor:global.commonCss.borderColor,
    	position:'absolute',
		bottom:0,
    	// bottom:-global.ScreenUtil.hTd(720),
		right:0,
		flex:0,
		flexDirection:'row'
	},
    /**
	 * 底部样式字体
     */
    item_bottom_font:{
    	fontSize:16,
		flex:0,
		textAlign:'center',
		lineHeight:global.ScreenUtil.hTd(90),
		height:global.ScreenUtil.hTd(95),
		width:global.ScreenUtil.pTd(288),
		color:global.commonCss.mainColor,
	},
    /**
	 * 竖线
     */
    verticalLine:{
    	width:0.5,
		backgroundColor:global.commonCss.borderColor
	}
});
