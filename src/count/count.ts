import {Component, Inject} from "angular2/core";
import {CountActions} from "./countActions";
import * as ca from "./countActions";

@Component({
    selector: "count",
    template: `<div>
        <button (click)="inc()"><b>+</b></button>
        <button (click)="dec()"><b>-</b></button>
        <button (click)="res()"><b>0</b></button>
        {{s.getState().count}}<!--this gives the initial value (0); {{count}} works after first click -->
    </div>`
})
export class Count {
    constructor(
        @Inject ('AppStore')
        public s: AppStore,
        public a: CountActions
    ){
        this.unsubscribe = this.s.subscribe(() => {
            let state = s.getState();
            this.count = state.count;
        });
    }
    inc(){this.s.dispatch(this.a.countInc());}
    dec(){this.s.dispatch(this.a.countDec());}
    res(){this.s.dispatch(this.a.countRes());}

    ngOnInit(){

    }
    ngOnDestroy(){
        this.unsubscribe();
    }
}