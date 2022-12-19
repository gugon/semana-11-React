function ButtonCount(param) {
    const {modifica,sinal,valor} = param

    return(
        <button onClick = { () => {modifica(valor)} } >{sinal}</button>
    );
}

export default ButtonCount;