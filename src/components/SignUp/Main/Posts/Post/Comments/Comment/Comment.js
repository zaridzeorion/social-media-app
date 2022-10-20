import React, { useState } from 'react'

import styles from './Comment.module.css'

import Anonymous from '../../../../../../../images/incognito.png'
import { UserAuth } from '../../../../../../../firebase/AuthContext'

// import {Emoji, EmojiPicker} from 'emoji-picker-react';


function Comment() {
    const { user } = UserAuth()

    return (
        <div className={styles.Container}>
            <img src={user.photoURL || Anonymous} className={styles.img} />

            <div className='flex flex-column'>
                <div className={styles.Comment}>
                    <h5>{user.displayName || 'Author'}</h5>
                    <p placeholder="Write A Comment..." >კომენტარი</p>
                </div>
                <span className={styles.light}>1m</span>
            </div>
        </div>
    )
}

export default Comment