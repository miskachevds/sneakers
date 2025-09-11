import './Card.css'
import React from 'react';
import { useState } from 'react';
import ContentLoader from "react-content-loader"

function Card({
    title,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    added = false,
    loading = false
}) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="card">
            {
                loading ? <ContentLoader
                    speed={2}
                    width={150}
                    height={265}
                    viewBox="0 0 150 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="3" y="5" rx="0" ry="0" width="133" height="120" />
                    <rect x="4" y="138" rx="0" ry="0" width="131" height="28" />
                    <rect x="5" y="178" rx="0" ry="0" width="44" height="27" />
                    <rect x="109" y="179" rx="0" ry="0" width="25" height="24" />
                    <rect x="169" y="287" rx="0" ry="0" width="11" height="2" />
                </ContentLoader> : <><div className="favorite" onClick={onClickFavorite}>
                <img width='13px' height='13px' src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
            </div>
            <img width='100%' height='135px' src={imageUrl} alt="sneakers" />
            <h5>{title}</h5>
            <div className='cardButtom'>
                <div className='cardElem'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className='button' onClick={onClickPlus}>
                    <img width="20px" height="20px" src={isAdded ? "img/btn-checked.svg" : "img/plus.svg"} alt="plus" />
                </button>
            </div> </>

            }

        </div>
    )
}
export default Card;