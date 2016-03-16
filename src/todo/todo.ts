import {Component, ContentChildren, Inject} from "angular2/core";
import {TodoActions} from "./todoActions";

@Component({
    selector: "todo",
    inputs: ['completed', 'id'],
    template: `<li>
        <button (click)="removeTodo(id)">x</button>
        <span
            (click)="onTodoClick(id)"
            [style.textDecoration]="completed ? 'line-through' : 'none'"
        >

            <ng-content></ng-content>
        </span>
    </li>`
})
export class Todo {
    constructor(
        @Inject('AppStore')
        public s: AppStore,
        public a: TodoActions
    ){}

    onTodoClick(id){
        this.s.dispatch(this.a.todoTog(id));
    }

    removeTodo(id){
        this.s.dispatch(this.a.todoDel(id));
    }
}