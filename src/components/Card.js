function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img width='13px' height='13px' src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width='133px' height='112px' src="img/sneakers/1.jpg" alt="sneakers" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='cardButtom'>
                <div className='cardElem'>
                    <span>Цена:</span>
                    <b>12 999</b>
                </div>
                <button>
                    <img width="20px" height="20px" src="img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}
export default Card;