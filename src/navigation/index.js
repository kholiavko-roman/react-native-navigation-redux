import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import * as actions from '../actions/counter';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';


const mapStateToProps = (state) => {
  console.log('Initial state');
  console.log(JSON.stringify(state));

  return {
    navState: state.stackState,
    counter: state.counterState.number,
    anotherValue: state.counterState.anotherValue
  }
};

const mapDispatchToProps = (dispatch) => {
  let actionCreators = bindActionCreators(actions, dispatch);

  return {
    ...actionCreators,
    dispatch
  }
};


class NavigationWrapper extends Component {
  render() {
    console.log('Props');
    console.log(JSON.stringify(this.props));

    const newProps = {...this.props};
    delete newProps.dispatch;
    delete newProps.navState;

    return(
      <Stacks
        screenProps={{...newProps}}
        navigation={
          addNavigationHelpers({
            state: this.props.navState,
            dispatch: this.props.dispatch
          })
        }
      />
    )
  }
}

const RouteConfigs = {
  FirstPage: {
    screen: FirstPage,
    navigationOptions: {
      title: 'First page'
    }
  },
  SecondPage: {
    screen: SecondPage,
    navigationOptions: {
      title: 'Page two'
    }
  }
};

const StackNavigatorConfig = {
  initialRouteName: 'FirstPage',
  mode: 'modal',
  headerMode: 'screen'
};

export const Stacks = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationWrapper);
