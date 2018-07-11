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
	ScrollView
} from 'react-native';
import global from "../../../utils/global/global";
import {SubHeadTitle, Describe, PickPhoto} from '../../common'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};

export default class SelfCheckTask extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			reactData: ''
		}
	}

	changeDescribe(data) {
		this.setState({reactData: data})
	}

	render() {
		return (
			<ScrollView style={styles.main_view}>
				<View style={styles.container}>
					<SubHeadTitle titleName='主题内容'/>
					<View>

					</View>
					<SubHeadTitle titleName='基础信息'/>
					<SubHeadTitle titleName='回复内容'/>
					<View style={{flex:0,alignItems:'center'}}>
						<View style={styles.text_Input}>
							<Describe
								changeDescribe={this.changeDescribe.bind(this)}
								fontLength={this.state.reactData.length}
								maxLength={300}
							/>
						</View>
					</View>
					<SubHeadTitle titleName='上传问题照片'/>
					<PickPhoto positionStyle={styles.photo_area} maxLength={10}/>
					<SubHeadTitle titleName='上传处理中照片'/>
					<PickPhoto positionStyle={styles.photo_area} maxLength={10}/>
					<SubHeadTitle titleName='上传已完成照片'/>
					<PickPhoto positionStyle={styles.photo_area} maxLength={10}/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	main_view: {
		flex: 1,
		backgroundColor: global.commonCss.screenColor
	},
	container: {
		flex: 0,
		backgroundColor: '#F5FCFF',
	},
	text_Input: {
		width: 0.95 * width,
		// height: 150,
		backgroundColor: '#ffffff',
		borderRadius: 10
	},
	photo_area: {
		marginLeft: 20,
	}
});
