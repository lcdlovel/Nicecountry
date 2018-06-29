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
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class ScoreEdit extends Component<Props> {
	popupDialog;
	constructor(props) {
		super(props);
		this.state = {}
	}

	_rowItem() {
		return(
			<TouchableOpacity
				style={styles.item_row}
				onPress={()=>{
					this.popupDialog.show()
				}}
			>
				<Text>生活垃圾收集转运(20分)</Text>
				<View style={styles.isRead}>
					<Text style={{marginRight:5}}>已读</Text>
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
					<Text>
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
				>
					<View>
						<Text>Hello</Text>
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
	head_row: {
		height: 40,
		width: width,
		paddingLeft: 15,
		backgroundColor: '#fafafa',
		justifyContent: 'center',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		shadowColor: 'gray',
		elevation: 2,
		marginTop: 1,
		marginBottom: 1
	},
	item_row:{
		height:45,
		flex:0,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingLeft:15,
		paddingRight:15,
		borderWidth:0.5,
		borderColor:global.commonCss.borderColor
	},
	isRead:{
		flex:0,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	pointColor:{
		backgroundColor:'#ff3948'
	}
});
