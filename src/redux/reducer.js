import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import tags from './tags'

export default combineReducers({
    router, tags
})
