const FILTER_SET = "FILTER_SET";

export class FilterActions {
    filterSet(filter){
        return {
            type: FILTER_SET,
            filter: filter
        };
    }
}

//reducer
export function filter(state = "SHOW_ALL", action) {
    switch(action.type){
        case FILTER_SET:
            return action.filter;
        default:
            return state;
    }
}
