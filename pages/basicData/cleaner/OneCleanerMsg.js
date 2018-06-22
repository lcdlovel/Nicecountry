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
	ScrollView
} from 'react-native';
import ShowDetailMsg from '../../common/ShowDetailMsg'
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
		return (
			<ScrollView>
				<View style={styles.container}>
					<ShowDetailMsg></ShowDetailMsg>
					<View style={{zIndex: 999, height: 50}}>
						<View style={styles.main_msg}>
							<Image source={require('../../../assets/images/sign.png')} style={styles.sign}/>
							<Text>hhaha </Text>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	main_msg: {
		width: 0.9 * width,
		borderRadius: 6,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		paddingTop: 20,
		paddingBottom: 20,
		position: 'absolute',
		top: 20
	},
	sign: {
		width: 29,
		height: 36,
		position: 'absolute',
		top: 0,
		left: 15
	},
});
