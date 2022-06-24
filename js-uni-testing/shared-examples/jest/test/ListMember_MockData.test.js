
const listMembers = require('../ListMember')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()
const axios = require('axios'); 
jest.mock('axios');
describe('Test Mock function', () => {
    beforeEach(() => {
        jest.mock('axios');
    })
    it('returns the title of the first album', async () => {

        axios.get.mockResolvedValue({
          data: [
            {
                "name": "thanh Long",
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
                
            },
        ]
        });
      
        await myTeam.getListMember();
        expect(myTeam.listMember).toContain('Phi Huy');
      });
})