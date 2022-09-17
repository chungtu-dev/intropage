import {combineReducers} from 'redux'

import filtersReducer from "../components-todo/Filters/FilterSlice";
import todoListReducer from "../components-todo/TodoList/TodosSlice";

// dùng combineReducers cho code gọn hơn, khi combineReducers chạy thì vẫn sẽ như func ở trên

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
});

export default rootReducer;

// split reducer : chia các reducer thành các phần nhỏ và ở reducer chung này gọi lại các reducer nhỏ