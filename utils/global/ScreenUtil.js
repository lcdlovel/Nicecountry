'use strict'
import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';


const uiWidth = 375 //这里的值，是设计稿中的宽度，你们根据自己的设计稿改动，本人拿到的设计稿是iphone6的
const uiHeight = 667//这里的值，是设计稿中的高度，你们根据自己的设计稿改动，本人拿到的设计稿是iphone6的
const pixel = 1 / PixelRatio.get()
const screenWidth = Dimensions.get('window').width
const screenHeith = Dimensions.get('window').height
const pixelRatio = PixelRatio.get()
const fontScale = PixelRatio.getFontScale()
const scale = Math.min(screenHeith / uiWidth, screenWidth / uiHeight)

export default {
    /*宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：utils.autoWidth(50)*/
    autoWidth(value) {
        return screenWidth * value / uiWidth;
    },
    /*高度适配，例如我的设计稿某个样式高度是50pt，那么使用就是：utils.autoheight(50)*/
    autoHeight(value) {
        return screenHeith * value / uiHeight;
    },
    /*字体大小适配，例如我的设计稿字体大小是17pt，那么使用就是：utils.setSpText(17)*/
    setSpText(number) {
        number = Math.round((number * scale + 0.5) * pixelRatio / fontScale)
        return number / pixel;
    }
}




