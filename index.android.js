// Index.android.js - place code in here for android

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


// Create a component with JSX
const App = () => (
    // Component Nesting
    <Header headerText={'Albums'} />
);

// Render it to the device
// ()=>App is an implicit return of the App function
// Registering a component to the application 'albums
// Only the 'root' component uses 'AppRegistry'
AppRegistry.registerComponent('albums', () => App);
