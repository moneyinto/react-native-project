import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 5
    },
});

class BaseInput extends React.Component {
    state = {
        active: false
    };
    onFocusHandle = (e) => {
        const { onFocus } = this.props;
        if (onFocus) {
            onFocus(e);
        }
        // 设置成激活
        this.setState({
            active: true,
        });
    }
    onBlurHandle = (e) => {
        const { onBlur } = this.props;
        if (onBlur) {
            onBlur(e);
        }
        // 设置成激活
        this.setState({
            active: false,
        });
    }
    _replaceSpace(str) {
        return str.replace(/\u0020/, '\u00a0');
    }
    render() {
        const props = {
            ...this.props,
        };
        
        const { value, style, theme, activeStyle = {}, ...resetProps } = props;
        const { active } = this.state;
        let realValue = value;
        if (value && style && style.textAlign && style.textAlign === 'right') {
            //react-native bug ,textAlign是right的时候，再字符后输入空格，除非输入下一个字符，不然空格不会展现出来
            realValue = this._replaceSpace(value);
        }
        return (
            <TextInput
                style={{
                    ...styles.input, ...style, ...active ? activeStyle : {}
                }}
                {...resetProps}
                onFocus={this.onFocusHandle}
                onBlur={this.onBlurHandle}
                value={realValue}
            />
        );
    }
}

export default BaseInput;
