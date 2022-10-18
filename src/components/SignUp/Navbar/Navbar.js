import React from 'react'

import Anonymous from '../../../images/incognito.png'
import LogoutIMG from '../../../images/logout.png'

import styles from './Navbar.module.css'

function Navbar({ user, logOut }) {
    const handleAccountView = () => {
        let AccountModal = document.getElementById("AccountModal");
        AccountModal.classList.toggle("hidden");
    }

    return (
        <nav className={styles.Navbar}>
            <span className={styles.Item}>Logo</span>
            <span className={styles.Item}>Social Media</span>

            <div className={styles.Item}>
                <p onClick={handleAccountView} className={styles.UserLogo}>
                    <img className={styles.image} src={user.isAnonymous ? Anonymous : user.photoURL} />
                </p>

                <div id="AccountModal" className={`${styles.AccountModal} hidden`}>
                    <p className='flex flex-center'>
                        {!user.isAnonymous
                            ? <><img style={{ marginRight: '0.5rem' }} className={styles.image} src={user.photoURL} /> {user.displayName}</>
                            : <><img style={{ marginRight: '0.5rem' }} className={styles.image} src={Anonymous} />Anonymous</>
                        }
                    </p>

                    <button onClick={logOut} className={`${styles.logoutBtn} flex flex-center`}>
                        <img style={{ marginRight: '0.5rem' }} className={`${styles.image}`} src={LogoutIMG} />

                        Log Out
                    </button>
                </div>
            </div>
        </nav>
    )
}


export default Navbar