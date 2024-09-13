import React from 'react'
import styles from './Layout.module.css'
const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header}> 
                <h1>Book App</h1>
                <h3>Shixon | react.js</h3>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>developed by m.r.jafari with ❤</p>
            </footer>
        </>
    )
}

export default Layout