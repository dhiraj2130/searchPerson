
export const ADD_EMPLOYEE;

export const employeeReducer = (state:any =[],action) => {

    switch(action.type){
        case ADD_EMPLOYEE:
            return [...state,action.payload];
        default:
            return state;
    }
}