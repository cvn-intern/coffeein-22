
const listMembers = require('./getListMemberName')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()
const axios = require('axios'); 
jest.mock('axios');

describe('Test Mock function', () => {
    it('should return a empty array', async () => {
        axios.get.mockResolvedValue({
          data: []
        });
      
        await myTeam.getListMemberName();
        const listMemberNames = []
        expect(myTeam.listMember).toEqual(listMemberNames);
    });
    
    it('should return an array with 5 elememt', async () => {
        axios.get.mockResolvedValue({
          data: [
            {
                "name": "Thanh Long",
                "username": "thanhlong"
            },
            {
                "name": "Thanh Luan",
                "username": "thanhluan"
            },
            {
                "name": "Phi Huy",
                "username": "phihuy"
            },
            {
                "name": "Quang Kiet",
                "username": "quangkiet"
                
            },
            {
                "name": "Minh Duc",
                "username": "minhduc"
            }
        ]
        });
      
        await myTeam.getListMemberName();
        const listMemberNames = ['Thanh Long','Thanh Luan','Phi Huy','Quang Kiet', 'Minh Duc']
        expect(myTeam.listMember).toEqual(listMemberNames);
    });

    it('should return an array with 5 value undifined', async () => {
        axios.get.mockResolvedValue({
        data: [
            {
                "member_name": "Thanh Long",
                "username": "thanhlong"
            },
            {
                "member_name": "Thanh Luan",
                "username": "thanhluan"
            },
            {
                "member_name": "Phi Huy",
                "username": "phihuy"
            },
            {
                "member_name": "Quang Kiet",
                "username": "quangkiet"
                
            },
            {
                "member_name": "Minh Duc",
                "username": "minhduc"
            }
        ]
        });
      
        await myTeam.getListMemberName();
        const listMemberNames = [undefined,undefined,undefined,undefined, undefined]
        expect(myTeam.listMember).toEqual(listMemberNames);
    });
})