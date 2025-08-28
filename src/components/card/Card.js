import './Card.css'
import React from 'react';
import { useState } from 'react';

function Card(props) {
    const[isAdded, setIsAdded] = useState(false);

    const onClickPlus = ()=>{
        setIsAdded(!isAdded);
    }

    return (
        <div className="card">
            <div className="favorite" onClick={props.onPlus}>
                <img width='13px' height='13px' src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width='133px' height='112px' src={props.imageUrl} alt="sneakers" />
            <h5>{props.title}</h5>
            <div className='cardButtom'>
                <div className='cardElem'>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className='button' onClick={onClickPlus}>
                    <img width="20px" height="20px" src={isAdded ? "img/btn-checked.svg" : "img/plus.svg"} alt="plus" />
                </button>
            </div>
        </div>
    )
}
export default Card;