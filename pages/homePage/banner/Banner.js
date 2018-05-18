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
	ScrollView
} from 'react-native';
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
//图片信息
let banner = [
	require('./img/banner01.png'),
	require('./img/banner02.png'),
	require('./img/banner03.png'),
]
type Props = {};
export default class Banner extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			position:0, //当前banner显示的下标
		}
	}
	/*组件绘制完成开启定时器*/
	componentDidMount(){
		this.startTimer()
	}
	static defaultProps = {
		duration: 3000 //定义轮播时间
	}

	/*图片根据数据动态加载*/
	getImages() {
		let images = []
		for (let index in banner) {
			images.push(
				<View key={index}>
					<Image source={banner[index]} style={styles.image}/>
				</View>
			)
		}
		return images
	}
	/*根据图片的数量显示小圆点的数目*/
	getIndicators(){
		var circles = []
		for (let index in banner){
			circles.push(
				<Text key={index}
					style={index == this.state.position?styles.selected:styles.unselected}
					>
					&bull;
				</Text>
			)
		}

		return circles
	}
	/*根据滚动刷新小圆点*/
	onAnimationEnd(v){
		let offsetX = v.nativeEvent.contentOffset.x 	//获取偏移量
		let position = Math.round(offsetX/width)  //计算index
		this.setState({
			position:position
		})
		this.startTimer()
	}
	/*定时器，并每隔1s position从0-3循环*/
	startTimer(){
		let scrollView = this.refs.scrollView
		this.timer = setInterval(()=>{
			let curr = this.state.position
			if (curr + 1>banner.length - 1){
				curr = 0
				scrollView.scrollTo({x:curr * width,y:0,animated:false})
			}else{
				curr ++
				scrollView.scrollTo({x:curr * width,y:0,animated:true})
			}
			this.setState({
				position:curr
			})
		},this.props.duration)
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.banner}>
					{/*banner*/}
					<ScrollView horizontal={true}
											ref='scrollView'
											showsHorizontalScrollIndicator={false}
											paginEnabled={true}
											onMomentumScrollEnd={(v)=>{this.onAnimationEnd(v)}}
											onTouchStart={()=>{clearInterval(this.timer)}}>
						{this.getImages()}
					</ScrollView>
					{/*圆点指示器*/}
					<View style={styles.indicator}>
						{this.getIndicators()}
					</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:0,
		backgroundColor: '#F5FCFF',
	},
	/*banner总区域*/
	banner:{
		height:240
	},
	/*banner各图片*/
	image:{
		width:width,
		height:240
	},
	/*指示器的样式*/
	indicator:{
		flex: 0,
		justifyContent:'center',
		alignContent:'center',
		width:width,
		height:40,
		position:'absolute',
		bottom:0,
		backgroundColor:'rgba(0,0,0,0.5)',
		flexDirection:'row',
		alignItems:'center'
	},
	/*指示器中小圆点的样式*/
	unselected:{
		marginLeft:10,
		fontSize:40,
		color:'#ffffff'
	},
	selected:{
		marginLeft:10,
		fontSize:40,
		color:'#5cb85c'
	}
});
