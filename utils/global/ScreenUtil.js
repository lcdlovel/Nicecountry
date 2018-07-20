'use strict'
import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';


// 设备宽度，单位 dp
const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp =  Dimensions.get('window').height;
// 设计稿宽度（这里为640px），单位 px
const uiWidthPx = 750;
const uiHeighPx = 1334;

export default {
    pTd  (uiElePx) {
        return uiElePx * deviceWidthDp / uiWidthPx;
    },
    hTd (uiElePx){
        return uiElePx * deviceHeightDp / uiHeighPx;
    }
}

// px 转 dp（设计稿中的 px 转 rn 中的 dp）





