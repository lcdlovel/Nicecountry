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
	ImageBackground
} from 'react-native';

type Props = {};
export default class StartUp extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}
	componentDidMount(){
		setTimeout(()=>{
			setTimeout(()=>{
				this.props.navigation.navigate('Loader')
			},2000)
		})
	}
	render() {
		return (
			<ImageBackground style={styles.image} resizeMode='cover' source={require('../../assets/images/qidong.png')}>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		width:null,
		//不加这句，就是按照屏幕高度自适应
		//加上这几，就是按照屏幕自适应
	}
});
