import {combineReducers} from "redux";

import {count} from "./count/countActions";
import {todos} from "./todo/todoActions";
import {filter} from "./filter/filterActions";


export function rootReducer(state= {}, action){
    return {
        count: count(state.count, action),
        todos: todos(state.todos, action),
        filter: filter(state.filter, action)
    };
}

/*
export function rootReducer(state = {}, action){
    return combineReducers({
        count,
        todos,
        filter
    });
}
*/

