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
                *ngFor="#todo of todos | visibleTodos: currentFilter"
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
        public s: AppStore
    ){
        this.unsubscribe = this.s.subscribe(() => {
            let state = this.s.getState();
            this.currentFilter = state.filter;
            this.todos = state.todos;
        });
    }

    private ngOnDestroy(){
        this.unsubscribe(); //remove listener
    }

}