import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import skillsReducer from './skillsReducer';
import profilesBySkillReducer from './profilesBySkillReducer';
import goalsReducer from './goalsReducer';
import profilesReducer from './profilesReducer';
import pathsReducer from './pathsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  skills: skillsReducer,
  profilesBySkill: profilesBySkillReducer,
  goals: goalsReducer,
  profiles: profilesReducer,
  paths: pathsReducer,
  user: userReducer,
  toastr: toastrReducer,
});

export default rootReducer;
