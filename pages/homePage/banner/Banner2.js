import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,

} from 'react-native';
//引用插件
import Swiper from 'react-native-swiper';
// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');
export default class Banner2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			swiperShow: false,
		};
	}

	// 轮播图
	render() {
		return (
			<View style={{height:240}}>
				<Swiper
					style={styles.wrpaper}
					height={240}
					showsButtons={false}
					removeClippedSubviews={false} //这个很主要啊，解决白屏问题
					autoplay={true}
					horizontal={true}
					paginationStyle={styles.paginationStyle}
					dotStyle={styles.dotStyle}
					activeDotStyle={styles.activeDotStyle}
				>
					<Image source={require('./img/banner01.png')} style={styles.hf_ban}/>
					<Image source={require('./img/banner02.png')} style={styles.hf_ban}/>
					<Image source={require('./img/banner03.png')} style={styles.hf_ban}/>
				</Swiper>
			</View>
		);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				swiperShow: true,
			});
		}, 1)
	}
}

const styles = StyleSheet.create({
	hf_ban:{
		width:width,
		height:240
	},
	wrpaper: {
		flex:0,
		width: width,
	},

	paginationStyle: {
		bottom: 6,
	},
	dotStyle: {
		width: 22,
		height: 3,
		backgroundColor: '#fff',
		opacity: 0.4,
		borderRadius: 0,
	},
	activeDotStyle: {
		width: 22,
		height: 3,
		backgroundColor: '#fff',
		borderRadius: 0,
	},

});
