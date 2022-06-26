
const listMembers = require('./mockData')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()
const axios = require('axios'); 
jest.mock('axios');

describe('Test Mock function', () => {
    it('call getListMember and returns list member of myTeam in case data have 0 elements', async () => {
        axios.get.mockResolvedValue({
          data: []
        });
      
        await myTeam.getListMember();
        const listMemberNames = []
        expect(myTeam.listMember).toEqual(listMemberNames);
    });
    
    it('call getListMember and returns list member of myTeam in case data have 5 elements', async () => {
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
      
        await myTeam.getListMember();
        const listMemberNames = ['Thanh Long','Thanh Luan','Phi Huy','Quang Kiet', 'Minh Duc']
        expect(myTeam.listMember).toEqual(listMemberNames);
    });

    it('call getListMember() function but data has no key to return', async () => {
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
      
        await myTeam.getListMember();
        const listMemberNames = ['Thanh Long','Thanh Luan','Phi Huy','Quang Kiet', 'Minh Duc']
        expect(myTeam.listMember).toEqual(listMemberNames);
    });
})