import Card from '../components/card/Card';


function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart }){
    return(
        <div className="content">

        <div className="content-input">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block">
            <img width="20px" src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className='removeBtn' width='13px' src="/img/btn-remove.svg" alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
          </div>
        </div>

        <div className="sneakers">
          {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={onAddToFavorite}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}

        </div>

      </div>
    )
}

export default Home;