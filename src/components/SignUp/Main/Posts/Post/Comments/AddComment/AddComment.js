import React, { useState } from 'react'

import styles from './AddComment.module.css'

import Anonymous from '../../../../../../../images/incognito.png'
import { UserAuth } from '../../../../../../../firebase/AuthContext'

// import {Emoji, EmojiPicker} from 'emoji-picker-react';


function AddComment() {
    const [comment, setComment] = useState()

    const { user } = UserAuth()
    console.log('aq', user)
    return (
        <div className={`${styles.Container} flex flex-center`}>
            <img src={user.photoURL || Anonymous} className={styles.img} />
            <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write A Comment..." className={styles.Comment} />
        </div>
    )
}

export default AddComment