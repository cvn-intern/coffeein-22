
const listMembers = require('./mockFunc')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()
const axios = require('axios'); 
jest.mock('axios');

const mockTask = jest.fn((taskIndex) => `Do task ${taskIndex}`);

describe('Test Mock function', () => {
    beforeEach(async () => {
        axios.get.mockResolvedValue({
            data: [
                {
                    "name": "Thanh Long",
                    "username": "thanhlong"
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
                "name": "Thanh Luan",
                "username": "thanhluan"
                },
                {
                    "name": "Minh Duc",
                    "username": "minhduc"
                }
            ]
        });

        await myTeam.getListMember();
    })

    it('Asign task 5 for member "Phi Huy" but "Phi Huy" can not do task 5', () => {
        const result = myTeam.assignedTask('Phi Huy', mockTask, 5)
        expect(myTeam.listTask['Phi Huy']).toBeUndefined()
        expect(result).toEqual('Member can not do this task')
    })

    it('Asign task 0 for member "Phi Huy"', () => {
        myTeam.assignedTask('Phi Huy', mockTask, 0)
        expect(myTeam.listTask['Phi Huy']).toEqual(['Do task 0'])
    })

    it('Asign task 0 for member "Phi Huy" but argument task is not a function', () => {
        expect(() => myTeam.assignedTask('Phi Huy', 'task', 0)).toThrow(Error)
    })

    it('Asign task 1 for member "Kiet" but "Kiet" is not exist in list member', ()  => {
        const result = myTeam.assignedTask('Kiet', mockTask, 1)
        expect(result).toBe('Name is not exist')
        expect(myTeam.listTask['Kiet']).toBeUndefined()
    })
    
    it('Asign task 0, 1 for member "Thanh Luan"', ()  => {
        myTeam.assignedTask('Thanh Luan', mockTask, 1)
        myTeam.assignedTask('Thanh Luan', mockTask, 2)
        expect(myTeam.listTask['Thanh Luan']).toEqual(['Do task 1', 'Do task 2'])
    })
})
