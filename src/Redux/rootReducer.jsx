import {combineReducers} from 'redux';
import CartReducer from './CardReducer';
const rootReducer = combineReducers({
    stateCard : CartReducer
});
export default rootReducer;