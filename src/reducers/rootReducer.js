import { combineReducers } from 'redux'

import assignmentsReducer from './assignmentsReducer'

const rootReducer = combineReducers({
  // name: nameReducer
  // books: booksReducer
  // etc
  assignments: assignmentsReducer
})

export default rootReducer
