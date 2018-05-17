/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View,TextInput} from 'react-native';

type Props = {};
export default class UserlessTextIput extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Useless Multiline Placeholder',
		};
	}

	render() {
		return (
			<TextInput
				{...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
				editable = {true}
				maxLength = {40}
			/>
		);
	}
}

const styles = StyleSheet.create({
});
