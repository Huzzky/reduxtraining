import {combineReducers} from 'redux';
import CarsReducers from '../data/car';


// * Все Reducer'ы нужно объедиить в один
const allReducers = combineReducers({
    cars: CarsReducers,
});

export default allReducers;