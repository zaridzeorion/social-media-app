import React from 'react'
import { UserAuth } from '../../firebase/AuthContext'

function SignIn() {
    const { googleSignIn } = UserAuth()

    const handleGoogleSignin = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            Login Page

            <button onClick={handleGoogleSignin}>Login With Google</button>
        </div>

    )
}

export default SignIn