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
	Image
} from 'react-native';

type Props = {};
export default class Loader extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.load_image} sourse={require('../../assets/images/nc_loader.png')}/>
				<Text>美丽乡村</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	},
	load_image:{
		width:400,
		height:400,
	}
});
