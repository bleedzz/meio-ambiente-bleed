import styles from './menu.module.css'
import React from 'react'

import MenuLink from '../menuLink'

export default function Menu() {

   

  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to="/">
                Ínicio
            </MenuLink>
            <MenuLink to="/sobrenos">
                Sobre nós
            </MenuLink>
            
        </nav>
    </header>

  )
}
