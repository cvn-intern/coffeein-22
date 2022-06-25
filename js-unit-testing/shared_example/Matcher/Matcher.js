function checkName(name) { 
    try {
        name = name.toString()
    }
    catch {
        return false
    }

    if (name == "")
        return false
    for (let i = 0; i < name.length; i++){
        if (!((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') || name[i] == ' '))
            return false
    }
    return true
}

function hello(name) {
    if (checkName(name)){
        return `Hello ${name}`
    }
    else {
        throw new Error("Invalid name: " + name)
    }
}

module.exports = hello