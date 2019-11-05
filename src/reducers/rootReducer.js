import { combineReducers } from 'redux'

import assignmentsReducer from './assignmentsReducer'
import coursesReducer from './coursesReducer'

const rootReducer = combineReducers({
  assignmentsReducer,
  coursesReducer
})

export default rootReducer
