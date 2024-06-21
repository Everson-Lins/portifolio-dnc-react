import styles from '../elements/ButtonB.module.css'

function ButtonB({text, link}){

    return (
        <div > 
            <a href={link} target='_blank'>
                <button className = {styles.btnB}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonB;