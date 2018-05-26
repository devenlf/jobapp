const ADD = 0;
const REMOVE = 1;

export function counter(state=0,action){
    switch(action.type){
        case ADD:
        return state+1;
        case REMOVE:
        return state-1;
        default:
        return 10
    }
}

export function addNum(){
    return {type:ADD}
}

export function removeNum(){
    return {type:REMOVE}
}