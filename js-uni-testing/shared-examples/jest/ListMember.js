class ListMember {
    constructor() {
        this.listMember = []
    }
    addMember (nameMember){
        this.listMember.push(nameMember) 
    }
    countMember = () => this.size()
    size = () => {}
}

module.exports = {
    ListMember: ListMember
}