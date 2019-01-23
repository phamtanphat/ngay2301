export default function shouldShowFormReducer(state = false ,action){
    if(action.type === 'TOGGLE_FORM') return !state;
    if(action.type === 'ADD_WORD'){
       return false;
    }
    return state;
}