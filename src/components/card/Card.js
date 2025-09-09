import './Card.css'
import React from 'react';
import { useState } from 'react';

function Card({title,imageUrl,price,onFavorite,onPlus,favorited = false}) {
    const[isAdded, setIsAdded] = useState(false);
    const[isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = ()=>{
        onPlus({title,imageUrl,price});
        setIsAdded(!isAdded);
    }

    const onClickFavorite =()=>{
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="card">
            <div className="favorite" onClick={onClickFavorite}>
                <img width='13px' height='13px' src={isFavorite ? "/img/liked.svg":"/img/unliked.svg"} alt="Unliked" />
            </div>
            <img width='133px' height='112px' src={imageUrl} alt="sneakers" />
            <h5>{title}</h5>
            <div className='cardButtom'>
                <div className='cardElem'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className='button' onClick={onClickPlus}>
                    <img width="20px" height="20px" src={isAdded ? "img/btn-checked.svg" : "img/plus.svg"} alt="plus" />
                </button>
            </div>
        </div>
    )
}
export default Card;