import styles from './rodape.module.css'
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'
import React from 'react'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada />

        Desenvolvido por Raphael M. Fattori
    </footer>
  )
}
