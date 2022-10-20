import React from 'react'

import styles from './Post.module.css'

import AnonymousIMG from '../../../../../images/incognito.png'
import LikeIMG from '../../../../../images/like.png'
import ColoredLikeIMG from '../../../../../images/like-blue.png'

import Comments from './Comments'


function Post() {

    return (
        <div className={styles.Container}>

            <div className={styles.AuthorContainer}>
                <img className={styles.AuthorIMG} src={AnonymousIMG} />

                <div style={{ marginLeft: '0.5rem' }}>
                    <h6 className={styles.Author}>Author</h6>
                    <span className={styles.light}>1m</span>
                </div>

                <span style={{ marginLeft: 'auto', marginBottom: 'auto' }}>...</span> {/* options */}

            </div>

            <p className={styles.Content}>is post is about posting a post</p>

            <p className={styles.Likes}><img className={styles.ColoredLikeIMG} src={ColoredLikeIMG} />1</p>

            <div className={styles.likeBtn}>
                <span><img src={LikeIMG} />Like</span>
            </div>


            <Comments />
        </div>
    )
}

export default Post