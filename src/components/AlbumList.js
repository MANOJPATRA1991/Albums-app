// Import libraries for making a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Make the AlbumList component
class AlbumList extends Component {
    constructor() {
        super();
        // class level property
        /* 
            this property will be available for use
            when the component first renders
        */
        this.state = { albums: [] };
    }

    componentWillMount() {
        // ASYNC HTTP Request to get albums from the API.
        // eslint-disable-next-line
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(data => this.setState({ albums: data }));
    }

    render() {
        console.log(this.state);

        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

// Make the component available to other parts of the app
export default AlbumList;
