import React from 'react'

const BotonAgregar = (props) => {
    const {
        titulo,
        onClick
    } = props;
    return (
        <div>
            <button onClick={onClick}>{titulo}</button>
        </div>
    )
}

export { BotonAgregar }