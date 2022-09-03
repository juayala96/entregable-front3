import { useState } from "react";

export default function Item({name, description, stock,addItem}) {
  const [cantStock, setCantStock] = useState(stock);

  function comprar(){
    addItem();
    setCantStock((cant)=> cant - 1);
    console.log("Se resta un item");
  }
  return (
    <div className='producto'>
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>En stock: {cantStock > 0 ? cantStock : <span>Agotado</span>} </h5>
      <button disabled={cantStock <=0} onClick={comprar}>{cantStock > 0 ? 'Comprar' : 'Sin Stock'}</button>
    </div>
  )
}
