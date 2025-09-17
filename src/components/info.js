import React from 'react'
import AppContext from '../context';

const info = ({title,image, description }) =>{
    const {setCartOpened} = React.useContext(AppContext)

    return (
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
            <button onClick={()=>setCartOpened(false)} className='btn-drawer'>Оформить заказ <img width='15px' height='15px' src="/img/arrow.svg" alt="arrow" /></button>
        </div>
    )
}

export default info;
