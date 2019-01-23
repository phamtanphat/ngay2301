export default function filterModeReducer(state = false , action){
    if(action.type === 'SET_FILTER_MODE') {
        return action.filterMode
      };
    return state;
}