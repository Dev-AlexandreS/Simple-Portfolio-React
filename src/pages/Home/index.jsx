import { Link } from "react-router-dom"
import styles from './Home.module.css'

function Home(){
    return(
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>Olá, sou <br/>
                <span>Alexandre Santana</span> <br/>
                Dev Full Stack
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_blue}`}>Saiba mais</Link>
            </div>
            <figure>
                <img className={styles.img} src="/developer-blue.svg" alt="Imagem de home" />
            </figure>
        </section>
        
    )
}

export default Home
