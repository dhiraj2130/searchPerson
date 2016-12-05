/**
 * Created by dhiraj.kumar on 5/12/2016.
 */
import { people } from './home.reducer';
import { Person,PersonClass } from "./models/Person";

describe('home reducer ',() => {
    it('should initalise reducer to []',()=>{
        expect(people(undefined,{})).toEqual([]);
    })
    it('should add value to state',() =>{
        expect(people([],{type:"ADD",payload:this.person})).toEqual([this.person])
    })
})