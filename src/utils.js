export const getDeepCopy = (object) => JSON.parse(JSON.stringify(object))

export const concatNumbers = (a, b) => {
    return parseInt(a.toString() + b.toString())
}
