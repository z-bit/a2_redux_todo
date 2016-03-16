export const TODO_ADD = "TODO_ADD";
export const TODO_DEL = "TODO_DEL";
export const TODO_TOG = "TODO_TOG";

export class TodoActions{
    nextTodo = 0;

    todoAdd(text){
        return {
            type: TODO_ADD,
            id: this.nextTodo++,
            text: text,
            completed: false
        };
    }

    todoDel(id){
        return {
            type: TODO_DEL,
            id: id
        };
    }

    todoTog(id){
        return {
            type: TODO_TOG,
            id: id
        };
    }
}

//reducer
export function todos(state = [], action) {
    switch (action.type) {
        case TODO_ADD:
            return [...state, {
                id: action.id,
                text: action.text,
                completed: action.completed
            }];
        case TODO_DEL:
            return state.filter(
                todo => todo.id !== action.id
            );
        case TODO_TOG:
            return state.map(
                todo => {
                    if (todo.id !== action.id) return todo;
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    };
                }
            );
        default:
            return state;
    }
}
