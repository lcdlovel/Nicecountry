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
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import YgInput from '../../common/YgInput'
import global from "../../../utils/global/global";
import CrudApi from "../../../utils/request/crud";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddTextArea extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            chose: '选择',
            listData: '',
            Group: '',
            isFocused: null,
            nodesStatus: null,
            currentNode: null,
        }
    }

    /**
     * 找子的函数
     * @param data
     * @param id
     * @returns {Array}
     * @private
     */
    _find = (data, id) => {
        const stack = [];
        let going = true;

        const walker = (childrenData, innerId) => {
            childrenData.forEach(item => {
                if (!going) return;
                stack.push({
                    id: item.id,
                    name: item.name,
                    parentId: item.parentId
                });
                if (item['id'] === innerId) {
                    going = false;
                } else if (item['regionTreeVoLst']) {
                    walker(item['regionTreeVoLst'], innerId);
                } else {
                    stack.pop();
                }
            });
            if (going) stack.pop();
        };

        walker(data, id);
        return stack;
    };
    /**
     * 点击下拉和收齐
     * @param e
     * @param item
     * @private
     */
    _onPressCollapse = ({ e, item }) => { // eslint-disable-line
        // const { data } = this.props;
        const routes = this._find(this.state.listData, item.id);
        this.setState((state) => {
            const nodesStatus = new Map(state.nodesStatus);
            nodesStatus.set(item.id, !nodesStatus.get(item.id)); // toggle
            return {
                currentNode: item.id,
                nodesStatus
            };
        }, () => {
            console.log(this.state)
            // const { onClick } = this.props;
            // onClick && onClick({ item, routes });
        });
    };
    _onClickLeaf = ({ item }) => { // eslint-disable-line
        this.setState((state) => {
            const isFocused = new Map(state.isFocused);
            isFocused.set( item.id, !isFocused.get( item.id)); // toggle
            return {
                currentNode: item.id,
                isFocused
            };
        }, () => {
            console.log(this.state)
            // const { onClick } = this.props;
            // onClick && onClick({ item, routes });
        });
    };

    /**
     *页面左端的发送按钮
     */

    static navigationOptions = (props) => {
        const {navigation} = props
        const {params} = navigation.state
        return {
            headerRight: (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                    }}>
                    <Text style={global.commonCss.confirm_btn}>{params.fromCheck === 'SelfCheckTask' ? '' : '发送'}</Text>
                </TouchableOpacity>
            )
        }
    }
    isHaveChildren(item){
     if ( item && item.regionTreeVoLst && item.regionTreeVoLst.length){
         return true}
         else{
         return false
     }

    }
    componentWillMount() {
        CrudApi.getInfo({
            url: 'Region/getAllByAdmin',
            data: {
                type: 'check'
            },
            callback: (res) => {
                console.log(res)
                this.setState({listData: res.data})
            }
        })
    }

    searchArea(text) {
        console.log(text)
    }

    _renderRow = ({item}) => {
        const isFocused = this.state.isFocused && this.state.isFocused.get(item.id) || false;
        if (this.isHaveChildren(item)) {
            const isOpen = this.state.nodesStatus && this.state.nodesStatus.get(item.id) || false;
            return (
                <View style={styles.total}>
                    <View style={styles.data_show}>
                        <TouchableOpacity
                            onPress={(e) => this._onPressCollapse({ e, item })}
                        >
                            <View style={[styles.data_show_left,this.isHaveChildren(item)?styles.border_right:'']}>
                                <View style={{ display:this.isHaveChildren(item)? 'flex': 'none'}} >
                                    <Image
                                        resizeMode='contain'
                                        style={styles.fatherIocn}
                                        source={!isOpen ?require('../../../assets/icons/shrink.png'):require('../../../assets/icons/Open.png')}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.data_show_right}>
                            <TouchableOpacity
                                onPress={(e) => this._onClickLeaf({ e, item })}
                            >
                                <Image
                                    resizeMode='contain'
                                    style={[styles.check_box, isFocused ? styles.check_box_img : '']}
                                    source={isFocused ? require('../../../assets/icons/true.png') : ''}
                                />
                            </TouchableOpacity>
                            <Text style={{fontSize: 15,}}>{item.name}</Text>
                        </View>
                    </View>
                    {
                        !isOpen ? null :
                            <FlatList
                                style={{flex: 1}}
                                data={item.regionTreeVoLst}
                                renderItem={this._renderRow}
                            />
                    }
                </View>
            )
        }
        return (
            <View style={styles.total}>
                <View style={styles.data_show}>
                    <View style={[styles.data_show_left,this.isHaveChildren(item)?styles.border_right:'']}>
                        <View style={{ display:this.isHaveChildren(item)? 'flex': 'none'}} >
                            <Image
                                resizeMode='contain'
                                style={styles.fatherIocn}
                                source={require('../../../assets/icons/shrink.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.data_show_right}>
                        <TouchableOpacity
                            onPress={(e) => this._onClickLeaf({ e, item })}
                        >
                            <Image
                                resizeMode='contain'
                                style={[styles.check_box, isFocused ? styles.check_box_img : '']}
                                source={isFocused ? require('../../../assets/icons/true.png') : ''}
                            />
                        </TouchableOpacity>
                        <Text style={{fontSize: 15,}}>{item.name}</Text>
                    </View>
                </View>
                {/*<FlatList*/}
                    {/*style={{flex: 1}}*/}
                    {/*data={item.regionTreeVoLst}*/}
                    {/*renderItem={this._renderRow}*/}
                {/*/>*/}
            </View>
        )

    }

    render() {
        const {params} = this.props.navigation.state
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <View style={{height: 60}}>
                    <YgInput Search={this.searchArea}/>
                </View>
                {/*<View style={[styles.check_Column, params.fromCheck === 'SelfCheckTask' ? styles.none : '']}>*/}
                {/*<View style={styles.check_item}>*/}
                {/*<View style={styles.check_box}></View>*/}
                {/*<Text>全选</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.check_item}>*/}
                {/*<View style={styles.check_box}></View>*/}
                {/*<Text>反选</Text>*/}
                {/*</View>*/}
                {/*</View>*/}
                <View style={{paddingBottom: params.fromCheck === 'SelfCheckTask' ? 60 : 100}}>
                    <FlatList
                        // ListFooterComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
                        ItemSeparatorComponent={() => (<View style={{height: 1, backgroundColor: '#dcdbdb'}}/>)}
                        data={this.state.listData}
                        renderItem={this._renderRow}
                    />
                </View>
            </View>
        );
    }
}
{/*<View style={styles.item_style}>*/
}
{/*<View*/
}
{/*style={[styles.check_box, styles.item_check_box, params.fromCheck === 'SelfCheckTask' ? styles.none : '']}></View>*/
}
{/*<TouchableOpacity key={item.name}*/
}
{/*onPress={() => {*/
}
{/*this.setState({Group: item.name})*/
}
{/*params.fromCheck === 'SelfCheckTask' ? navigation.navigate('TaskCreate', {fromCheck: params.fromCheck}) : ''*/
}
{/*}}*/
}
{/*>*/
}
{/*<Text*/
}
{/*style={[styles.item_text, params.fromCheck === 'SelfCheckTask' ? styles.padding : '']}>{item.name}</Text></TouchableOpacity>*/
}
{/*</View>*/
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: global.commonCss.screenColor,
    },
    /**
     * 选项框的样式
     */
    check_box: {
        width: global.ScreenUtil.pTd(global.isIphoneX() ? 35 : 30),
        height: global.ScreenUtil.hTd(30),
        borderWidth: 1,
        borderColor: global.commonCss.borderColor,
        marginRight: global.ScreenUtil.pTd(15)
    },
    /**
     * 选中时选项框的样式
     */
    check_box_img: {
        borderColor: 'transparent'
    },
    check_Column: {
        flex: 0,
        flexDirection: 'row',
        height: 40,
        shadowColor: "rgba(182, 183, 185, 0.28)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 12,
        shadowOpacity: 1,
        elevation: 3,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    check_item: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_text: {
        fontSize: 15,
        height: 40,
        lineHeight: 40,
        // paddingLeft: 10
    },

    item_style: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_check_box: {
        marginRight: 6
    },
    none: {
        display: 'none'
    },
    padding: {
        paddingLeft: 15
    },
    /**
     * 父级元素前的icon
     */
    fatherIocn: {
        width:global.ScreenUtil.pTd(global.isIphoneX()?35:25),
        height:global.ScreenUtil.hTd(25)
    },
    /**
     * 数据显示层
     */
    data_show: {
        flex: 0,
        height: global.ScreenUtil.hTd(65),
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        // borderBottomWidth: global.ScreenUtil.hTd(0.5),
        // borderColor: global.commonCss.borderColor,
    },
    total: {
        paddingLeft:20,
    },
    /**
     * 显示单个数据的右边
     */
    data_show_right: {
        flex: 0,
        marginLeft:20,
        // left: global.ScreenUtil.pTd(90),
        flexDirection: 'row',
        alignItems: 'center',
    },
    /**
     * 显示单个数据的左边
     */
    data_show_left:{
        width:30,
        // left:global.ScreenUtil.pTd(50),
        paddingRight:global.ScreenUtil.pTd(30),
    },
    /**
     * 竖线
     */
    border_right:{
        borderRightWidth:global.ScreenUtil.pTd(0.5),
        borderColor:global.commonCss.borderColor
    }
});
