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
	TextInput,
	Image,
	FlatList
} from 'react-native';
import {baseUrl} from "../../../utils/request/url";
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';
import YgInput from '../../common/YgInput'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width,height} = dimensions.get('window')
type Props = {};
export default class allArea extends Component<Props> {
	popupDialog;
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		}
	}
	componentWillMount(){
		const {url} = this.props.navigation.state.params
	}
	render() {
		const {underNavigations} = this.props.navigation.state.params
		const slideAnimation = new SlideAnimation({slideFrom: 'bottom',});
		const {navigation} = this.props
		return (
			<View style={styles.container}>
				<YgInput onChangeText={(val) => {
					this.setState({text: val})
				}}/>
				<View style={styles.line}></View>
				<View>
					<FlatList
						ListFooterComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
						ItemSeparatorComponent={() => (<View style={{height: 0.5, backgroundColor: '#dcdbdb'}}/>)}
						data={[{key: '海港区'}, {key: '高港区'}]}
						renderItem={
							({item}) =>
								<Text key={item.key}
											style={styles.item_text}
											onPress={() => {
												underNavigations?navigation.navigate(underNavigations.first):this.popupDialog.show();
											}}
								>{item.key}</Text>}
					/>
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
		backgroundColor: '#ffffff'
	},
	line: {
		height: 3,
		backgroundColor: '#dcdbdb'
	},
	item_text: {
		fontSize: 15,
		height: 40,
		lineHeight: 40,
		paddingLeft: 10
	},
	dog_style:{
		marginTop: - 0.3 * height
	}
});
