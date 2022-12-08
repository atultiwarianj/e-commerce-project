// import {createStore} from 'redux'
// import rootred  from './Redux/reducers/main';

// const store = createStore(
//     rootred
// );

// export default store;
import { legacy_createStore as createStore} from 'redux';
import rootReducers from './reducers';

const store = createStore(rootReducers);

export default store;