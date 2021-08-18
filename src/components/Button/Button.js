const Button =( {onClick, id, children})=>{
    return(
        <button onClick={()=>onClick(id)}>{children}</button>
    )
}

export default Button;