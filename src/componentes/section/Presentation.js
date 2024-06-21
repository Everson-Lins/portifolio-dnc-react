
import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';


function Presentation(){
    return(
        <div className={styles.presentation} id='Presentation'>

            <h2> Bem vindo ao meu Portifólio.</h2>
            <h1> Olá, eu sou Everson Lins!</h1>
            <p> Lorem ipsum massa elit nisl interdum sodales fames leo, <br></br>
            dui porta iaculis sapien etiam cubilia luctus sit, platea nisl gravida<br></br>
            conubia aliquam ullamcorper dui. dapibus sed aliquam suspendisse praesent<br></br>
            posuere et curabitur gravida posuere fermentum a, tristique fringilla turpis<br></br>
            elementum aptent porta mauris lorem vivamus ut hendrerit, massa enim senectus<br></br>
            sit pretium platea cursus urna est dolor. lacus pretium urna nullam cubilia<br></br>
            eros nam tortor facilisis hac justo, dolor pellentesque ut auctor turpis dictum<br></br>
            venenatis auctor mauris, sed odio eu porttitor porta nullam vivamus ante sodales.<br></br>
            tempus quam turpis porttitor semper turpis, luctus donec nisi adipiscing, senectus<br></br>
            etiam neque sit.</p>
            
            <ButtonA link='https://github.com/Everson-Lins' text='Conecte-se comigo!'/>

        </div>
    )

}

export default Presentation;