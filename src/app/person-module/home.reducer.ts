
export const people = (state =[{id:"100",name:"dhiraj"}],action) => {
    
    switch(action.type){
        case "ADD":
            return[...state,action.payload];

        default:
            return state;
    }
}