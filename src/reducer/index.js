import UserReducer from './user';
import ProductReducer from './product';
import ProductsReducer from './products';
import { combineReducers } from 'redux';

export default combineReducers({
    user: UserReducer,
    products: ProductsReducer
})