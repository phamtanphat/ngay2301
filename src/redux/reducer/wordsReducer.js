export default function wordsReducer(state = [] , action){
    if(action.type === 'SET_WORDS') return action.words;
    if(action.type === 'REMOVE_WORD'){
        const words = state.filter(w => w._id !== action._id);
        return words;
    }
    if(action.type === 'TOGGLE_WORD'){
        const words = state.map(w =>{
            if(w._id === action._id) return {...w, isMemorized : !w.isMemorized}
            return w;
        });
        return words;
    }
    if(action.type === 'ADD_WORD'){
        const words = state.concat(action.word);
        return words;
    }
    return state;
}