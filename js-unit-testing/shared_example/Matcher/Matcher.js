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
        if (!((name[i] >= 'a' && name[i] <= 'z') || 
        (name[i] >= 'A' && name[i] <= 'Z') || 
        name[i] == ' '))
            return false
    }
    return true
}

function welcome(name) {
    if (checkName(name)){
        return `Welcome ${name} to Cybozu company`
    }
    else {
        throw new Error("Invalid name: " + name)
    }
}

module.exports = welcome


