import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

});

/**
 * 网络图片自适应
 */
class HttpImage extends Component {
    state = {
        width: 0,
        height: 0
    }

    layout = ({ nativeEvent }) => {
        const { layout } = nativeEvent;
        const { uri, onReady } = this.props;
        if (uri) {
            Image.getSize(uri, (width, height) => {
                this.setImageSize(layout, width, height)
            })
        }
        // 返回图片的宽高
        onReady && onReady(layout);
    }

    setImageSize = (layout, width, height) => {
        if (layout.width == 0) {
            // 不设置宽度，默认屏幕宽度
            const imageHeight = Math.floor(screenWidth / width * height);
            this.setState({
                width: screenWidth,
                height: imageHeight
            })
        } else {
            const imageHeight = Math.floor(layout.width / width * height);
            this.setState({
                height: imageHeight
            })
        }
    }

    render() {
        const { uri, style } = this.props;
        const { width, height } = this.state;
        return (
            <Image {...this.props} style={{ width, height, ...style }} source={{ uri }} onLayout={this.layout} />
        );
    }
}

export default HttpImage;
