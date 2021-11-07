const wordSearch = (letters, word) => { 
    if(word.length === 0 || letters.length === 0){
        return false
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        
        if (l.includes(word)) return true
    }
    return false
}

module.exports = wordSearch