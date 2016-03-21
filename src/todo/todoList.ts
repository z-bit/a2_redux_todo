import {Component, Inject} from "angular2/core";
import {Todo} from "./todo";
import {VisibleTodosPipe} from "./visibleTodosPipe";

@Component({
    selector: "todo-list",
    directives: [Todo],
    pipes: [VisibleTodosPipe],
    template: `<div>
        <ul>
            <todo
                *ngFor="#todo of store.getState().todos | visibleTodos: store.getState().filter"
                [completed]="todo.completed"
                [id]="todo.id"
            >
                {{todo.text}}
            </todo>
        </ul>
    </div>`
})
export class TodoList {
    constructor(
        @Inject('AppStore')
        public store: AppStore
    ){
        this.unsubscribe = this.store.subscribe(() => {
            let state = this.store.getState();
            this.currentFilter = state.filter;
            this.todos = state.todos;
        });
    }

    private ngOnDestroy(){
        this.unsubscribe(); //remove listener
    }

}