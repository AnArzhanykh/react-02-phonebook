import styles from './Button.module.scss'

const Button =( {onClick, id, children})=>{
    return(
        <button className={styles.Button} onClick={()=>onClick(id)}>{children}</button>
    )
}

export default Button;