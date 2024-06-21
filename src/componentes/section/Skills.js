import styles from '../section/Skills.module.css'
import js from '../../Image/skill/js.svg'
import css from '../../Image/skill/css.svg'
import html5 from '../../Image/skill/html5.svg'
import react from '../../Image/skill/react.svg'
import timescript from '../../Image/skill/timescript.svg'


function Skills(){
    return(
        <div id='Skills' className={styles.skill}>
            <h1>Habilidades</h1>
            <p> Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
                <div id='images'>
                    <img src={js}/>
                    <img src={css}/>
                    <img src={html5}/>
                    <img src={react}/>
                    <img src={timescript}/>
                </div>
        </div>
    )
}

export default Skills;