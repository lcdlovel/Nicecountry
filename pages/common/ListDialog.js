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
	FlatList,
	TouchableOpacity
} from 'react-native';
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';

//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')
type Props = {};
export default class  extends Component<Props> {
	ListPopupDialog;

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const slideAnimation = new SlideAnimation({slideFrom: 'bottom',});
		return (
			<View style={styles.container}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={()=>{
						console.log(this.ListPopupDialog)
						this.ListPopupDialog.show()
					}}
				>
					<View style={{height:15,
					width:width}}>
						<Text>请选择</Text>
					</View>

				</TouchableOpacity>
				<PopupDialog
					ref={(popupDialog) => {
						this.ListPopupDialog = popupDialog;
					}}
					dialogAnimation={slideAnimation}
					width={0.7}
					height={0.3}
					dialogStyle={styles.dog_style}
				>
					<View>
						<Text>哈哈哈哈哈</Text>
						{/*<FlatList*/}
							{/*data={[{key: '海港区'}, {key: '高港区'}]}*/}
							{/*renderItem={({item}) => <Text key={item.key} style={styles.item_text}*/}
																						{/*onPress={() => this.ListPopupDialog.hide()}>{item.key}</Text>}*/}
						{/*/>*/}
					</View>
				</PopupDialog>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	dog_style: {
		marginTop: -0.3 * height
	}

});
