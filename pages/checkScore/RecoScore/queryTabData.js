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
    FlatList
} from 'react-native';
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class queryTabData extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}
    _choosebox(item){
		return(
			<View></View>

		)
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.head_row}>
					<Text style={styles.title_font}>
						总分:
					</Text>
					<Text style={[styles.title_font,styles.scores]}>100分</Text>
				</View>
				<View>
					<FlatList
                        data={[{name: '全部'}, {name: '90以上'}]}
                        renderItem={({item}) => this._choosebox(item)}
                        ItemSeparatorComponent={() => {
                            return (<View style={styles.item_separator}></View>)
                        }}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: global.commonCss.screenColor,
	},
    /**
	 * 标题行的样式
     */
	head_row: {
		height: global.ScreenUtil.hTd(100),
		width: width,
		flexDirection:'row',
		paddingLeft: 15,
		backgroundColor: '#fafafa',
		alignItems: 'center',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		shadowColor: 'gray',
		elevation: 2,
		marginTop: 1,
		marginBottom: 1
	},
    /**
	 * 标题行的字体
     */
    title_font:{
		fontSize:18,
		color:'#0c0c0c'
	},
    /**
	 * 分数
     */
    scores:{
    	color:global.commonCss.mainColor
	}

});
