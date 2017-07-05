// Index.android.js - place code in here for android

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component with JSX
class App extends Component {
    // Component Nesting
    render() {
        return (
            <View>
                <Header headerText={'Albums'} />
                <AlbumList />
            </View>
        );
    }
}

// Render it to the device
// ()=>App is an implicit return of the App function
// Registering a component to the application 'albums
// Only the 'root' component uses 'AppRegistry'
AppRegistry.registerComponent('albums', () => App);
