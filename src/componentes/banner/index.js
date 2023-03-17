import React from 'react'
import styles from './banner.module.css'
import circuloColorido from 'assets/dia-mundial-do-meio-ambiente.jpg'
import minhaFoto from 'assets/tree-svgrepo-com.svg'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá, pessoas!</h1>
            <p className={styles.paragrafo}>
                Boas vindas a apresentação sobre temas envolvendo cuidados ao meio ambiente,aqui você encontrará diversar informações úteis e explicadas de forma simples, espero que gostem!
            </p>
        </div>
        <div className={styles.imagens}>
            <img
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
            />
            <img
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="foto do Raphael Fattori"
            />
        </div>

    </div>
    
  )
}
