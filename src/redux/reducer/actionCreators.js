export function toggleForm(){
    return {type : 'TOGGLE_FORM'}
}
export function setFiltermode(filterMode){
    return {type : 'SET_FILTER_MODE' , filterMode}
}
export function removeWord(_id){
    return {type : 'REMOVE_WORD' , _id}
}
export function toggleWord(_id){
    return {type : 'TOGGLE_WORD' , _id}
}
export function addWord(word){
    return {type : 'ADD_WORD' , word}
}
export function setWord(words){
    return {type : 'SET_WORDS' , words}
}