// import {listMember} from "./ListMember";

const listMembers = require('../ListMember')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()

describe('Class ListMember', () => {  
    beforeEach(() => {
        const myTeam = new ListMember()
    });  
    it('Should add an element to array object succesfull: myTeam.addMember("Huy") ==> listMember.listMember() == ["Huy"]', ()=>{
        myTeam.addMember('Huy')
        expect(myTeam.listMember).toEqual(['Huy'])
    });
    
    it('Should add an element to array object succesfull: myTeam.addMember("Kiet") ==> listMember.listMember() == ["Huy", "Kiet"]', ()=>{
        myTeam.addMember('Kiet')
        expect(myTeam.listMember).toEqual(['Huy', 'Kiet'])
    });

    it("Function countMember() must return 10 althought function size() is empty", () => {
        jest.spyOn(myTeam, 'size').mockImplementation(()=>10);
        expect(myTeam.countMember()).toBe(10);
    })

    it("Function countMember() return value must greater then 0 and less than 20", () => {
        expect(myTeam.countMember()).toBeLessThan(20);
        expect(myTeam.countMember()).toBeGreaterThan(0);
    })
    it("Mock data", async () => {
        await myTeam.getListMember();
        expect(myTeam.listMember).toContain('Patricia Lebsack');
    })
});