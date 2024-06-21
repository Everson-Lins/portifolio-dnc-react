import styles from '../elements/ButtonA.module.css'

function ButtonA({text, link}){

    return (
        <div> 
            <a href= {link} target='_blank'>
                <button className = {styles.btnA}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonA;