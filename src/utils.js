export const getDeepCopy = (object) => JSON.parse(JSON.stringify(object))

export const concatNumbers = (a, b) => {
    return +(a.toString() + b.toString())
}
