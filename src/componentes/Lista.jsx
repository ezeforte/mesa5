
import React from 'react';
import { ReactDOM } from 'react';

function Lista({nome,image,preco}) {
  return (
    <>
    <H1>{nome}</H1>
    <img src={image}></img>
    <p>{preco}</p>
    </>
  )
}

export default Lista