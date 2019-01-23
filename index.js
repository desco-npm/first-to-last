const isArray = require('is-array')

const firstToLast = (_list, _n, _reverse = false) => {
    const isObject = !isArray(_list)
    const list = !isObject ? [ ..._list, ] : Object.keys(_list)

    reverse(list, _reverse)

    for (let c = 0; c < _n; c++) {
        list.push(list.shift())
    }

    reverse(list, _reverse)

    return !isObject ? list : toObject(list, _list)
}

function reverse (array, reverse) {
    if (reverse) {
        array.reverse()
    }
}

function toObject (list, _list) {
    let toReturn = {}

    toReturn = {}

    list.map(i => {
        toReturn[i] = _list[i]
    })

    return toReturn
}

module.exports = firstToLast