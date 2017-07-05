// Import libraries for making a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Make the AlbumList component
class AlbumList extends Component {
    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}
// Make the component available to other parts of the app
export default AlbumList;
