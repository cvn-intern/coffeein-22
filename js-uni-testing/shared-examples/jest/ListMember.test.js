// import {listMember} from "./ListMember";

const listMembers = require('./ListMember')
let ListMember = listMembers.ListMember;

const listMember1 = new ListMember()

describe('Class ListMember', () => {    
    it('Should add an element to array object succesfull: listMember1.addMember("Huy") ==> listMember.listMember() == ["Huy"]', ()=>{
        listMember1.addMember('Huy')
        expect(listMember1.listMember).toEqual(['Huy'])
    });
    
    it('Should add an element to array object succesfull: listMember1.addMember("Kiet") ==> listMember.listMember() == ["Huy", "Kiet"]', ()=>{
        listMember1.addMember('Kiet')
        expect(listMember1.listMember).toEqual(['Huy', 'Kiet'])
    });

    it("Function countMember() must return 10 althought function size() is empty", () => {
        jest.spyOn(listMember1, 'size').mockImplementation(()=>10);
        expect(listMember1.countMember()).toBe(10);
    })

    // it('should add an element to array object succesfull by mock technical', ()=>{

    // })
});