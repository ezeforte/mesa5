
import React from 'react';
import { ReactDOM } from 'react';

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = (props) => {
  return (
    <>
      <h1>Esto es un componente</h1>
      <h2>{props.algo}</h2> 
      

    </>
  );
}

export default Card;