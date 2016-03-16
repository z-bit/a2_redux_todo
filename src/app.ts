import 'angular2/bundles/angular2-polyfills.js';
import 'zone.js';
import 'reflect-metadata';
import {Component, ApplicationRef, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {TodoActions} from "./todo/todoActions";
import {CountActions} from "./count/countActions";
import {FilterActions} from "./filter/filterActions";

const appStore = createStore(rootReducer);

import {TodoAdd} from "./todo/todoAdd";
import {TodoList} from "./todo/todoList";
import {Filter} from "./filter/filter";
import {Count} from "./count/count";

@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    directives: [Count, Filter, TodoAdd, TodoList]
})
class App {
    name: string;

        constructor(){
            this.name = 'Angular2';
            setTimeout(() => {
                this.name = 'Boy'
        }, 1000);
    }
}

bootstrap(App, [
    provide('AppStore', {useValue: appStore}),
    CountActions,
    TodoActions,
    FilterActions

]);

