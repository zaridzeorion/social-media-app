import React from 'react'
import { UserAuth } from '../../firebase/AuthContext'

import Navbar from './Navbar'

function SignUp() {
    const { user, logOut } = UserAuth()


    return (
        <div>
            <Navbar user={user} logOut={logOut} />

        </div>

    )
}

export default SignUp