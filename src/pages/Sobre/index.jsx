import styles from './Sobre.module.css'
import avatar from './Images/alexandre.jpeg'
import html from './Images/icon-html.svg'
import css from './Images/icon-css.svg'
import js from './Images/icon-js.svg'
import react from './Images/icon-react.svg'
import node from './Images/icon-node.svg'
import sql from './Images/icon-sql.svg'

function Sobre(){
    return(
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="foto perfil" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Alexandre Santana</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Trabalho com desenvolvimento a pouco mais de um ano.</p>
                    <p>Sou apaixonado pela tecnologia</p>
                    <p>Especializado em Paginas estaticas, automações, Ecommercer, Saas, entre outros.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>

                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />

                </div>
            </div>
        </section>
    )
}

export default Sobre