import {Component, Inject} from "angular2/core";
import {TodoActions} from './todoActions';

@Component({
    selector: "todo-add",
    template: `<div>
        <form (submit)="onSubmit(todo)">
            <input #todo>
        </form>

        <p>{{todos | json}}</p>
    </div>`
})
export class TodoAdd {
    constructor(
        @Inject ('AppStore')
        public s: AppStore,
        public a: TodoActions
    ){
        this.unsubscribe = this.s.subscribe(() => {
            let state = this.s.getState();
            this.todos = state.todos;
        });
    }

    addTodo(input){
        this.s.dispatch(this.a.todoAdd(input.value));
        input.value="";
    }
    onSubmit(todo){
        this.addTodo(todo);
    }

    private ngOnDestroy() {
        this.unsubscribe();
    }
}