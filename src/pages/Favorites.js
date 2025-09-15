import React from 'react';
import Card from '../components/card/Card';
import AppContext from '../context';


function Favorites({ onAddToFavorite }){//items
    const {favorites} = React.useContext(AppContext)

    return(
        <div className="content">

        <div className="content-input">
          <h1>Мои закладки</h1>
          
        </div>

        <div className="sneakers">
          <h3>Здесь должны быть карточки кроссовок</h3>
          {favorites.map((item, index) => (
                      <Card
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        favorited={true}
                      />
                    ))}

        </div>

      </div>
    )
}

export default Favorites;