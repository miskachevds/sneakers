function Header(props){
    return(
         <header>
        <div className="headerLeft">
          <img width="40px" height="40px" src='/img/logo.png' alt='Logotype'/>
          <div className="headerInfo">
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li onClick={props.onClickCard}>
            <img width="18px" height="18px" src='/img/card.png' alt='Cart'/>
            <span>1205руб</span></li>
          <li>
            <img width="18px" height="18px" src='/img/account.png' alt='Account'/>
          </li>
        </ul>
      </header>
    )
}

export default Header;