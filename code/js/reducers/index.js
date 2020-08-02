import {combineReducers} from 'redux';
import CarsReducers from './car';


// * Все Reducer'ы нужно объедиить в один
const allReducers = combineReducers({
    // ? Это он
    cars: CarsReducers,
});

export default allReducers;