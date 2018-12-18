import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {Button} from 'react-native-elements';

class ReviewScreen extends Component {

  static navigationOptions = ({navigation}) => {
    // const {navigate} = navigation.navigate;
    return {
     title: 'Review Jobs',
      headerRight: (
        <Button
         title="Settings"
          onPress={() => {navigation.navigate('settings')}}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
         />
      ),
      style:{
        marginTop: Platform.OS === 'android' ? 24: 0
      }
      // header: () => {
      //   return (
      //     right: <Text>Go right</Text>
      //   };
      // }
  };
}
  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>

      </View>
    );
  }
}

export default ReviewScreen;
