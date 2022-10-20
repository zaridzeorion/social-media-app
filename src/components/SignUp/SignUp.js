import React from 'react'
import { UserAuth } from '../../firebase/AuthContext'

import Navbar from './Navbar'
import Main from './Main'

function SignUp() {
    const { user, logOut } = UserAuth()


    return (
        <div>
            <Navbar user={user} logOut={logOut} />
            <Main />
        </div>

    )
}

export default SignUp