## ES6 Important Features

With ES6, each file has its own little apartment or shell

By default, no files get access to global variables or anything like that

>We can reach out to other files only by **importing** them and work with code that exists elsewhere in our project

## What is JSX ?

JSX is an extension to the Javascript language that is used to write React components.

*JSX makes life easier. I's just a syntactic sugar.*

## What is a COMPONENT ? 

A component produces some shape or text that can be rendered on to our mobile devices.

**A component is a Javascript function that returns some amount of JSX** (*JSX is a dialect of Javascript which tells React in return what content we want to show on the screen*).

Following libraries need to be imported in order to create a component:

```
import React from 'react';
import ReactNative from 'react-native';
```
> Two important topics that go hand-in-hand are:
> Component Nesting and Consuming Exported Objects