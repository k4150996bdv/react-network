export const required = (value) => {
    if (value) return undefined
    else return "Field is required"
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    else return undefined
}


// export const maxLength30 = (value) => {
//     if (value.length > 30) return "Max length is 30 symbols"
//     else return undefined
// }

