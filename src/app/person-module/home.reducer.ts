
export const people = (state =[],action) => {
    
    switch(action.type){
        case "ADD":
            return[...state,action.payload];
        case "DELETE":
            return state.filter(person => person.id !== action.payload.id);
        default:
            return state;
    }
}