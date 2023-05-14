import {combineReducers} from 'redux';
import CardReducer from './CardReducer';
import DataReducer from './DataReducer';
import CartReducer from './CartReducer';
const rootReducer = combineReducers({
    stateData : DataReducer,
    stateCard : CardReducer,
    stateCart : CartReducer,
});
export default rootReducer;