import { combineReducers } from 'redux'

import assignmentsReducer from './assignmentsReducer'
import coursesReducer from './coursesReducer'
import cycleReducer from './cycleReducer'

const rootReducer = combineReducers({
  assignmentsReducer,
  coursesReducer,
  cycleReducer
})

export default rootReducer
