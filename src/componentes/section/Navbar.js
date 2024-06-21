import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import Nav from 'react-bootstrap/Nav'



function Navbar(){

    return(
        <div className ={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Everson-Lins' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/everson-lins-950b5428a/' target='_blank'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )

}

export default Navbar;
