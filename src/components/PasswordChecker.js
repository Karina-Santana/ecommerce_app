import React from "react";
import { checkPass } from '../helper/checkPass';

function PasswordChecker({
    password,
    handlePassword,
    showPassword,
    inputType
}) {
    const passwordStrength = () => {
        if (checkPass(password).score === 0) {
            return ''
        } else if (checkPass(password).score <= 2) {
            return 'The password is weak.' + '\n' + 'Please enter a password that is at least 6 characters long, that has at least one uppercase, one lowercase letter and a number.'
        } else if (checkPass(password).score === 3 || checkPass(password).score === 4) {
            return 'The password is medium.' + '\n' + 'If you want to strengthen your password: enter a password that is at least 6 characters long, that has at least one uppercase, one lowercase letter and a number.'
        } else if (checkPass(password).score > 3) {
            return 'The password is strong.'
        }
    }

    return (
        <div>
            <input
                type={inputType}
                onChange={handlePassword}
                value={password}
            />
            <p>{passwordStrength()}</p>
            <label htmlFor="show-password">Show password</label>
            <input
                onChange={showPassword}
                name="checkbox"
                type="checkbox"
            />
        </div>
    )
}

export default PasswordChecker