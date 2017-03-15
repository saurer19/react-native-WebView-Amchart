/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  WebView,
} from 'react-native';

export default class prueba extends Component {
 render() {

    return (

        <WebView
              source={require('./web/amchart.html')}
              javaScriptEnabledAndroid={true}
            >
            </WebView>
    );
  }
}

AppRegistry.registerComponent('prueba', () => prueba);
