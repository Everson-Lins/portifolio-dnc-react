import ButtonB from '../elements/ButtonB'
import styles from '../section/Projects.module.css'
import Card from '../elements/Card'
import lparq from '../../Image/projects/lparq.png'
import ccxp from '../../Image/projects/ccxp.png'

function Projects(){
    return(
        <div id='Projects' className={styles.projects}>
            <h1>Projetos</h1>
            <Card
             img={lparq}
             title="Landing Page Arquitetura"
             tech=" HTML, CSS"
             description="Este é um projeto/desafio número 1 de desenvolvimento de imersão em Tecnologia da Escola DNC. Profissão Desenvolvedor de Front End."
             repo="https://github.com/Everson-Lins/desafio1-landing-page?tab=readme-ov-file"
             site="https://desafio1-landingpage-arquitetura.netlify.app/"
            />
            
            <Card
            img={ccxp}
            title="CCXP"
            tech=" HTML, CSS, JS"
            description="Este é um projeto de desenvolvimento de imersão em Tecnologia da Escola DNC. Profissão Desenvolvedor de Front End."
            repo="https://github.com/Everson-Lins/projeto-landing-page"
            site=""
            />
            <ButtonB link='https://github.com/Everson-Lins?tab=repositories' text='Acesse meu repositório!'/>

        </div>
    )

}

export default Projects