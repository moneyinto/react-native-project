import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#eeeeee',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    },
});

class Button extends Component {
    onPress = () => {
        const { onPress } = this.props;
        if (typeof onPress === 'function') { onPress(); }
    }
    render() {
        const { children, textStyle, underlayColor, borderColor, borderWidth, backgroundColor, color, size, width, height, ...other } = this.props;
        return (
            <TouchableHighlight
                underlayColor={underlayColor || '#efefef'}
                style={{
                    ...styles.button,
                    ...borderColor ? { borderColor } : {},
                    ...borderWidth ? { borderWidth } : {},
                    ...width ? { width } : {},
                    ...height ? { height } : {},
                    ...backgroundColor ? { backgroundColor } : {},
                }}
                {...other}
                onPress={this.onPress}
            >
                {typeof children === 'string' ?
                    <Text style={{
                        ...textStyle || styles.text,
                        ...color ? { color } : {},
                        ...size ? { fontSize: size } : {}
                    }}>{children}</Text>
                    : children
                }
            </TouchableHighlight>
        );
    }
}

export default Button;
