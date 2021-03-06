import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import {Provider} from 'react-redux';
import store from './store';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const MainNavigator = createBottomTabNavigator({
  welcome: {screen: WelcomeScreen},
  auth: {screen: AuthScreen},
  main: {
    screen: createBottomTabNavigator({
      map: {screen: MapScreen},
      deck: {screen: DeckScreen},
      review: {
        screen: createStackNavigator({
          review: {screen: ReviewScreen},
          settings: {screen: SettingsScreen}
        })
      }
    }, {
      tabBarPositions: 'bottom',
      tabBarOptions: {
        labelStyle: {fontSize: 12}
      }
    })
  }
}, {
  defaultNavigationOptions: {
    tabBarVisible:  false
  },
  lazyLoad:true
});

const AppContainer = createAppContainer(MainNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
