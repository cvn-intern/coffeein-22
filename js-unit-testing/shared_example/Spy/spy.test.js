const listMembers = require('./spy')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()
const myTeam1 = new ListMember()
const myTeam2 = new ListMember()

const mockTask = jest.fn((taskIndex) => `Do task ${taskIndex}`);

describe("Spy Test", () => {
    it('Test spyOn. Asign a task for member "Phi Huy" and use Mock function to create a fake function. But use spyOn to fake checkTask() function return true value', () => {
        jest.spyOn(myTeam, 'checkTask').mockImplementation(() => true);
        myTeam.assignedTask('Phi Huy', mockTask, 5)
        expect(myTeam.listTask).toEqual({'Phi Huy': ['Do task 5']});
    })

    it('Test spyOn. Asign a task for member "Phi Huy" and use Mock function to create a fake function. But use spyOn to fake checkTask() function return false value', () => {
        jest.spyOn(myTeam1, 'checkTask').mockImplementation(() => false);
        const result = myTeam1.assignedTask('Phi Huy', mockTask, 4)
        expect(result).toEqual('Member can not do this task');
    })

    it('Test spyOn. Asign a task for member "Phi Huy" and use Mock function to create a fake function. But use spyOn to fake checkTask() function return neither true or false value', () => {
        jest.spyOn(myTeam2, 'checkTask').mockImplementation(() => 'Not true or false');
        const result = myTeam2.assignedTask('Phi Huy', mockTask, 3)
        expect(result).toEqual('Not true or false');
    })
})