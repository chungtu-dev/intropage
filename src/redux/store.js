// import {legacy_createStore as createStore} from 'redux'
// import rootReducer from './reducer';
// import {composeWithDevTools} from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import {configureStore} from '@reduxjs/toolkit'
import filtersReducer from '../components-todo/Filters/FilterSlice'
import todoListReducer from '../components-todo/TodoList/TodosSlice'

const store = configureStore({
    reducer:{
        filters: filtersReducer.reducer,
        todoList: todoListReducer.reducer,
    }
})

export default store