/**
 * Created by dhiraj.kumar on 5/12/2016.
 */
import { people } from './home.reducer';
import { Person,PersonClass } from "./models/Person";

describe('home reducer ',() => {
    beforeEach(()=>{
            this.person = new PersonClass(0,"name","address");
            this.person1 = new PersonClass(1,"name","address");
    }
    )
    it('should initalise reducer to []',()=>{
        expect(people(undefined,{})).toEqual([]);
    })
    it('should add value to state',() =>{
        expect(people([],{type:"ADD",payload:this.person})).toEqual([this.person])
    })
    it('should delete a person from state',()=>{
        expect(people([this.person,this.person1],{type:"DELETE",payload:this.person})).toEqual([this.person1]);
    })


})