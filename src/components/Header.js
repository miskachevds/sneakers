import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <div className="headerLeft">

          <img width="40px" height="40px" src='/img/logo.png' alt='Logotype' />
          <div className="headerInfo">
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <li onClick={props.onClickCard}>
          <img width="18px" height="18px" src='/img/card.png' alt='Корзина' />
          <span>1205руб</span></li>
        <li>
          <Link to="/favorites">
            <img width="18px" height="18px" src='/img/liked.svg' alt='Закладки' />
          </Link>
        </li>
        <li>
          <img width="18px" height="18px" src='/img/account.png' alt='Пользователь' />
        </li>
      </ul>
    </header>
  )
}

export default Header;