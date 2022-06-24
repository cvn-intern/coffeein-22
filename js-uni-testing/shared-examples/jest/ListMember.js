const axios = require('axios');

class ListMember {
    constructor() {
        this.listMember = []
    }
    addMember =  (nameMember) => {
        this.listMember.push(nameMember) 
    }
    countMember = () => this.size()
    size = () => {}
    getListMember = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.listMember = response.data.map(item => item.name);
    }
}

module.exports = {
    ListMember: ListMember
}