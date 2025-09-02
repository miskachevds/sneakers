function Drawer({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина
                    <img onClick={onClose} className='removeBtn' width='13px' src="/img/btn-remove.svg" alt="Close" /> </h2>

                <div className="cartItem">
                    {
                        items.map((obj) => (
                            <div className="cartItem">

                                <div
                                    style={{
                                        backgroundImage: `url(${obj.imageUrl})`,
                                        width: '133px',
                                        height: '112px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                ></div>

                                <div>
                                    <p>{obj.title}</p>
                                    <b>{obj.price}</b>
                                </div>
                                <img className='removeBtn' width='13px' src="/img/btn-remove.svg" alt="remove" />
                            </div>
                        ))
                    }
                </div>

                <div className="items">
                    <ul className='cardTotalBlock'>
                        <li>
                            <span>Итого</span>
                            <div></div>
                            <b>21 498</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074</b>
                        </li>
                    </ul>
                    <button className='btn-drawer'>Оформить заказ <img width='15px' height='15px' src="/img/arrow.svg" alt="arrow" /></button>
                </div>


            </div>
        </div>

    )
}

export default Drawer;

