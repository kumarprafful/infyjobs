import {AsyncStorage} from 'react-native';
import {Facebook} from 'expo';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

// this code is same as below just added added async functionality with redux thunk
// export const facebookLogin = () => {
//   let token = await AsyncStorage.getItem('fb_token');
//   if(token) {
//     // Dispatch an action saying FB login is done
//   }
//   else {
//     // start up FB login process
//   }
// }


export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if(token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
  }
  else {
    // start up FB login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let {type, token} = await Facebook.logInWithReadPermissionsAsync('761326657536420', {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });

}
