/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 自定义输入组件
 */

import React, {Component} from 'react';
import {View,TextInput} from 'react-native';

type Props = {};
export default class UselessTextInput extends Component<Props> {
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
//使用方法
{/*<View style={styles.textInput}
						>
							<UselessTextInput
								multiline = {true}
								numberOfLines = {4}
								underlineColorAndroid='transparent'
								placeholder='请输入用户名'
								onChangeText={(text) => this.setState({text})}
								value={this.state.text}
							/>
					</View>*/}