import {combineReducers} from 'redux';
import auth from './auth_reducer';
import jobs from './job_reducer';
import likeJobs from './like_reducer';

export default combineReducers({
  auth, jobs, likeJobs
});
