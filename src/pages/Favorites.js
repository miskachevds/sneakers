import Card from '../components/card/Card';


function Favorites({items}){
    return(
        <div className="content">

        <div className="content-input">
          <h1>Мои закладки</h1>
          
        </div>

        <div className="sneakers">
          <h3>Здесь должны быть карточки кроссовок</h3>
          {items.map((item, index) => (
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