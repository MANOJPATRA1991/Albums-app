// Import libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

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

    // function executed when component is about to be rendered
    componentWillMount() {
        // ASYNC HTTP Request to get albums from the API.
        // eslint-disable-next-line
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        // resolve promise with json content
        .then(response => response.json())
        .then(data => this.setState({ albums: data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    }
}

// Make the component available to other parts of the app
export default AlbumList;
