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
				<Image style={styles.load_image} source={require('../../assets/images/nc_loader.png')}/>
				<Text style={styles.nc_font}>美丽乡村</Text>
				<View style={styles.nc_inputView}>
					<View style={styles.nc_input}>
						{/*<Image source={require('')}></Image>*/}
					</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	load_image:{
		width:80.5,
		height:80.5,
	},
  nc_font:{
		fontSize:15
	},
  nc_inputView:{

	},
  nc_input:{

	}
});
