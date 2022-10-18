import React from 'react'
import { UserAuth } from '../../firebase/AuthContext'

import styles from './SignIn.module.css'

import Google from '../../images/google.png'
import incognito from '../../images/incognito.png'

import Button from '../Button'

function SignIn() {
    const { googleSignIn, anonymousSignIn } = UserAuth()


    return (
        <div className={`${styles.Container} flex flex-center flex-column`}>
            <h1>Social Media</h1>


            <form className={`${styles.Form} flex flex-column`}>
                <Button img={Google} text="Continue with Google" onClick={googleSignIn} />
                <br />
                <Button img={incognito} text="Anonymous Login" onClick={anonymousSignIn} />
            </form>
        </div>

    )
}

export default SignIn