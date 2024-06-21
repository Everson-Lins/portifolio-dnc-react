import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

function Footer(){
    return(
        <div className ={styles.footer}>
             <ul>
                <li><a href='https://www.instagram.com/' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Everson-Lins' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/everson-lins-950b5428a/' target='_blank'><FaLinkedin size={30}/></a></li>
            </ul>

            <p>linseverson@gmail.com</p>
            <p>Everson Lins © 2023</p>
        </div>
    )

}

export default Footer;