import React, {Component} from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	Navigator
} from 'react-native';
import global from "./utils/global/Global";

export default class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>{global.game}</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})