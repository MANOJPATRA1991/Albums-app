// Index.android.js - place code in here for android

// Step-1: Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import Card from './src/components/Card';
// Step-2: Create a component named App with JSX
class App extends Component {
    // Component Nesting
    // render() function returns some JSX to render
    render() {
        return (
            <View>
                <Header headerText={'Albums'} />
                <AlbumList />
            </View>
        );
    }
}

// Step-3: Render it to the device
// ()=>App is an implicit return of the App function
// Registering App (root component) to the application 'albums'
// Only the 'root' component uses 'AppRegistry'
AppRegistry.registerComponent('albums', () => App);
