import PostModelo from 'componentes/postModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './sobremim.module.css'
import fotosobremim from 'assets/sobre_mim_foto.jpg'

export default function SobreMim() {
  return (

    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre nós"




    >
      <h3 className={styles.subtitulo}> Olá, eu sou o Raphael!</h3>
      <img src={fotosobremim}
        alt="foto sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>Oi, tudo bem? Você deve estar se perguntando quem somos nós.</p>

        <p className={styles.paragrafo}>Somos alunos do 3° ano do ensino médio da escola Aroldo Donizetti Leite, também conhecida como "Jaqueira".</p>

        <p className={styles.paragrafo}>Quais alunos fizeram parte dessa pesquisa? Lhes apresento, eu, Raphael M. Fattori, Yago Lovato, Maria Rita Marracini e Erick Camargo. </p>
        
      <p className={styles.paragrafo}>Qual o intuito dessa pesquisa? Demonstrar o quanto nosso planeta está sendo degradado e promover formas de auxilia-lo em sua preservação.</p>

        <p className={styles.paragrafo}> Espero que gostem da pesquisa e aproveito para lhe convidar a promover o assunto compartilhando o site!</p>




    </PostModelo>

  )
}
