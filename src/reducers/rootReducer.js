import { combineReducers } from 'redux'

import assignmentsReducer from './assignmentsReducer'
import coursesReducer from './coursesReducer'
import cycleReducer from './cycleReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  assignmentsReducer,
  coursesReducer,
  cycleReducer,
  userReducer,
})

export default rootReducer
