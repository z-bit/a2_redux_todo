import {Component, Inject} from "angular2/core";
import {}
import {FilterActions} from "./filterActions";

const SHOW_ALL = 'SHOW_ALL';
const SHOW_COMPLETED = "SHOW_COMPLETED";
const SHOW_ACTIVE = "SHOW_ACTIVE";

@Component({
    selector: "filter",
    styleUrls:["src/filter/filter.css"],
    template: `<div>
        <form>
            <input type="radio" name="filter" (click)="radio('SHOW_ALL')" checked>all
            <input type="radio" name="filter" (click)="radio('SHOW_ACTIVE')">active
            <input type="radio" name="filter" (click)="radio('SHOW_COMPLETED')">completed
            <span class="space"></span><b>{{s.getState().filter}}</b>
        </form>
    </div>`
})
export class Filter {
    constructor(
        @Inject ('AppStore') appStore: AppStore, filterActions: FilterActions
    ){
        this.s = appStore;
        this.a = filterActions;
        this.local = 'initial';
    }
    radio(filter){
        this.local = filter;
        this.s.dispatch(this.a.filterSet(filter));
    }



}

