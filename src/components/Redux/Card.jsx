import React from 'react'

export default function Card(props) {
    let {id,name,price,src} = props.object;
    const truncateString = (string, num) => {
        if (string.length > num) {
            return string.slice( 0, num ) + "...";
        } else {
            return string;
        }
    }
  return (
    <div className='card'>
        <div className="cardImage">
            <img src={src} alt={id} />
        </div>
        <div className='cardInfo'>
            <h3>{truncateString(name,23)}</h3>
            <p>{price.toLocaleString()} VNĐ</p>
        </div>
        <div className='cardButton'>
            <button type="button" className="detailCard" data-bs-toggle="modal" data-bs-target="#detail" onClick={() => {}}>detail</button>
            <button type="submit" className='addToCartCard' onClick={() => {}}>add to cart</button>
        </div>
    </div>
  )
}
