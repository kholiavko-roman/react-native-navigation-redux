import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './config/StoreConfig';
import StackNavigation from './navigation/';

const store = configureStore();

class ReduxNavigation extends Component {
  render() {
    return(
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    )
  }
}

export default ReduxNavigation;