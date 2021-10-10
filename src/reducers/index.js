import counterReducer from './counter'
import loggedReducer from './isLogged'
import isNavbar from './isNavbar'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    navbar: isNavbar
})

export default allReducers