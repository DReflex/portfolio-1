import { combineReducers } from 'redux'
import form from './reducer'
import State from './state'

const todoApp = combineReducers({
  form,
  State
})

export default todoApp
