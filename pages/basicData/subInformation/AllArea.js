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
import CrudApi from "../../../utils/request/crud";
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')
type Props = {};
export default class allArea extends Component<Props> {
    popupDialog;

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            listData: [],
            fatherData: [],
            areaName: ""
        }
    }

    componentWillMount() {
        console.log('这是在AllArea', this.props.navigation)
        const {customData} = this.props.navigation.state.params
        CrudApi.getInfo({
            url: 'Region/findByRegionIdOrCategoryId',
            data: {
                'regionId': global.User_msg.regionId,
                'regionCategoryId': customData.regionCategoryId,
            },
            callback: (res) => {
                console.log(res.data)
                this.setState({listData: res.data})
            }
        })
    }

    /**
     * 搜索框查询
     * @constructor
     */
    SearchArea() {
        CrudApi.getInfo({
            url: 'Region/findParentRegionNamesByRegionId',
            data: {
                regionName: this.state.text
            },
            callback: (res) => {
                console.log(res)
            }
        })
    }

    render() {
        const {underNavigations} = this.props.navigation.state.params
        const slideAnimation = new SlideAnimation({slideFrom: 'bottom',});
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <YgInput onChangeText={(val) => {
                    this.setState({text: val})
                }} Search={this.SearchArea.bind(this)}/>
                <View style={styles.line}></View>
                <View>
                    <FlatList
                        ListFooterComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
                        ItemSeparatorComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
                        data={this.state.listData}
                        renderItem={
                            ({item}) =>
                                <Text key={item.name}
                                      style={styles.item_text}
                                      onPress={() => {
                                          CrudApi.getInfo({
                                              url: 'Region/findParentRegionNamesByRegionId',
                                              data: {
                                                  regionId: item.id
                                              },
                                              callback: (res) => {
                                                  this.setState({fatherData: res.data})
                                              }
                                          })
                                          this.setState({areaName: item.name})
                                          this.popupDialog.show();
                                      }}
                                >{item.name}</Text>}
                    />
                </View>
                {/**显示父级的对话框*/}
                <PopupDialog
                    ref={(popupDialog) => {
                        this.popupDialog = popupDialog;
                    }}
                    dialogAnimation={slideAnimation}
                    width={0.7}
                    height={0.3}
                    dialogStyle={styles.dog_style}
                >
                    <View>
                        <Text style={styles.dialog_font}>{this.state.areaName}</Text>
                        <Text style={styles.dialog_font}>所属区域:</Text>
                        <Text style={styles.dialog_font}>{this.state.fatherData.join('-')}</Text>
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
    dog_style: {
        marginTop: -0.3 * height
    },
    dialog_font: {
        fontSize:15
    }
});
