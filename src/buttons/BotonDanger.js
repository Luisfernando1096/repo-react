import React from 'react'

const BotonDanger = ({ titulo, onclick }) => {
  return (
    <>
        <button onClick={onclick} className='btn btn-danger'>{titulo}</button>
    </>
  )
}

export {BotonDanger}