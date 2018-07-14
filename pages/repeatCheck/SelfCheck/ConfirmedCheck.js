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
  TouchableOpacity
} from 'react-native';
import CrudApi from "../../../utils/request/crud";
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class ConfirmedCheck extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
			listData:[]
		}
  }
	getTaskData(url,data){
		return new Promise(resolve => {
			CrudApi.getInfo({
				url:url,
				data:data,
				callback:(res)=>{
					resolve(res)
				}
			})
		})
	}
	componentWillMount(){
		const {fromCheck} = this.props.navigation.state.params
		switch (fromCheck){
			case 'checkTaskReceived':
				this.getTaskData('CheckInfo/findCheckInfo',{
					confirmState:1,
					sendOrReceive:1
				}).then(res=>{
					console.log('求取已回复值',res.data.list)
					this.setState({listData:res.data.list},()=>{
						console.log(this.state.listData)
					})
				})
				break;
			case  'checkTaskSended':
				this.getTaskData('CheckInfo/findCheckInfo',{
					confirmState:1,
					sendOrReceive:0
				}).then(res=>{
					this.setState({listData:res.data.list},()=>{
						console.log(this.state.listData)
					})
				})
        break
		}
	}
  _contentConstractor(item) {
    const {navigation} = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={
          ()=>{
            navigation.navigate('TaskDetail',{data:item,DataType:'confirmedCheck'})
          }
        }
      >
        <View style={styles.rc_content}>
          <View style={[styles.rc_conItem, styles.rc_content_first]}>
            <View>
							<Text style={styles.rc_Itemfont}>{item.sendRegionName}</Text>
            </View>
            <View style={styles.rc_ItemBottom}>
							<Text style={styles.rc_bottomFont}>{item.createTime.slice(0,10)}</Text>
							<Text style={styles.rc_bottomFont}>{item.createTime.slice(11,-2)}</Text>
            </View>
          </View>
          <View style={[styles.rc_itemOther, styles.rc_content_last]}>
						<Text style={styles.rc_Itemfont}>{item.theme}</Text>
          </View>
					<View style={[styles.rc_item_last, styles.rc_content_last]}>
						<Text style={[styles.rc_Itemfont,styles.del_font]} onPress={()=>{
							CrudApi.postInfo({
								url:'CheckInfo/deleteCheckInfo',
								data:{
									checkInfoId:item.id
								},
								callback:(res)=>{
									console.log(res)
								}
							})
						}}>{'删除'}</Text>
					</View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.rc_header}>
            <Text>发送地区名称</Text>
            <Text style={{marginLeft: 30}}>主题</Text>
          </View>
          {this.state.listData.map(item => this._contentConstractor(item))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  rc_header: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#fff',
    marginTop: 8,
    paddingLeft: 20
  },
  rc_content: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d4dcda'
  },
  rc_content_first: {
    marginLeft: 15
  },
  rc_conItem: {
    width: 1 / 3 * width,
  },

  rc_content_last: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  rc_Itemfont: {
    fontSize: 14,
    color: "#0c0c0c"
  },
  rc_ItemBottom: {
    marginTop: 10
  },
  rc_bottomFont: {
    fontSize: 10
  },
  rc_confirm: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  rc_itemOther: {
    width: 0.4 * width
  },
	rc_item_last:{
  	width:0.2 * width,
	},
	del_font:{
		width:0.2 * width,
  	color:global.commonCss.mainColor,
		textAlign:'right',
	}
});