import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text>{this.props.album.title}</Text>
                </CardSection>
            </Card>
        );
    }
}

export default AlbumDetail;
