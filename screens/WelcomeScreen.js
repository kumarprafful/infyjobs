import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import _ from 'lodash';
import {AppLoading} from 'expo';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  {text: 'Welcome to the JobApp', color:'#03A9F4'},
  {text: 'Use this to get Job', color:'#009688'},
  {text: 'Get started', color:'#03A9F4'}
]

class WelcomeScreen extends Component {
  state = {token: null}

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if(token) {
      this.props.navigation.navigate('map');
      this.setState({token});
    }
    else {
      this.setState({token:false});
    }

  }

  render() {
    if(_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <View>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}

export default WelcomeScreen;
