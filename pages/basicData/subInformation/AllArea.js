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
import YgInput from '../../common/YgInput'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class allArea extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	render() {
		const url = this.props.navigation.state.params.url
		return (
			<View style={styles.container}>
				<YgInput onChangeText={(val) => {
					this.setState({text: val})
				}}/>
				<View style={styles.line}></View>
				<View>
					<FlatList
						ListFooterComponent={()=>(<View style={{height:1,backgroundColor:'#dcdbdb'}}/>)}
						ItemSeparatorComponent={ () => (<View style={{height:0.5,backgroundColor:'#dcdbdb'}} /> )}
						data={[{key: '海港区'}, {key: '高港区'}]}
						renderItem={({item}) => <Text style={{fontSize:15,height:40,lineHeight:40,paddingLeft:10 }}>{item.key}</Text>}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	line:{
		height:3,
		backgroundColor:'#dcdbdb'
	}
});
