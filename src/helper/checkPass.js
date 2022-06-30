import * as helperFunctions from "../helper/passwordAttributeFunction"

const checkPass = (password) => {
    let score = 0

    const passwordPoints = {
        hasLowerCase: helperFunctions.hasLowerCase(password),
        hasUpperCase: helperFunctions.hasUpperCase(password),
        hasNumber: helperFunctions.hasNumber(password),
        isOver6Char: helperFunctions.isOver6Char(password)
    }
    for (let key in passwordPoints) {
        if (passwordPoints[key]) {
            score++
        }
    }
    passwordPoints["score"] = score
    return passwordPoints
}

export { checkPass }