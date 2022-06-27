
const listMembers = require('./assignTask')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()
const axios = require('axios'); 

// Tất cả method trong module axios sẽ trả về dưới dạng mock function jest.fn()
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

    it('should return a string in case error', () => {
        const result = myTeam.assignedTask('Phi Huy', mockTask, 5)
        expect(myTeam.listTask['Phi Huy']).toBeUndefined()
        expect(result).toEqual('Member can not do this task')
    })

    it('should create an array and add new task for member in list task', () => {
        myTeam.assignedTask('Phi Huy', mockTask, 0)
        expect(myTeam.listTask['Phi Huy']).toEqual(['Do task 0'])
    })

    it('should throw an error if argument task is not a function', () => {
        expect(() => myTeam.assignedTask('Phi Huy', 'task', 0)).toThrow(listMembers.TYPE_ERROR)
    })

    it('should throw an error if name member is not exist in list member', ()  => {
        const result = myTeam.assignedTask('Kiet', mockTask, 1)
        expect(result).toBe('Name is not exist')
        expect(myTeam.listTask['Kiet']).toBeUndefined()
    })
    
    it('should create an array and push task in list task of member', ()  => {
        myTeam.assignedTask('Thanh Luan', mockTask, 1)
        myTeam.assignedTask('Thanh Luan', mockTask, 2)
        expect(myTeam.listTask['Thanh Luan']).toEqual(['Do task 1', 'Do task 2'])
    })
})
