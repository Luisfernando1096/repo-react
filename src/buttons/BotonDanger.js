import React from 'react'

const BotonDanger = ({ titulo }) => {
  return (
    <>
        <button className='btn btn-danger'>{titulo}</button>
    </>
  )
}

export {BotonDanger}