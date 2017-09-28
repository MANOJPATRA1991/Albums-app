import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

class Card extends Component {
    render() {
        const { containerStyle } = styles;
        const shadowOpt = {
            color: '#000',
            radius: 2,
            x: 0,
            y: 2,
            opacity: 0.1
        };
        return (
            <BoxShadow setting={shadowOpt}>
                <View style={containerStyle}>
                </View>
            </BoxShadow>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});

export default Card;
