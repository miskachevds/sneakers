import Card from '../components/card/Card';
import AppContext from '../context';
import React from 'react';

function Home({
  items,
  // cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
}) {

  // const renderItems = () => {
  //   const filtredItems = items.filter(item => 
  //     item.title.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   return (isLoading? [...Array(10)]: filtredItems).map((item, index) => (
  //       <Card
  //         key={index}
  //         title={item.title}
  //         price={item.price}
  //         imageUrl={item.imageUrl}
  //         onFavorite={onAddToFavorite}
  //         onPlus={(obj) => onAddToCart(obj)}
  //         loading={false}
  //         {...item}
  //       />
  //     ))
  // }

  // const { isItemAdded } = React.useContext(AppContext);

  const { isItemAdded } = React.useContext(AppContext);

  const renderItems = () => {
  if (isLoading) {
    return [...Array(8)].map((_, index) => (
      <Card key={index} loading={true} />
    ));
  }

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return filteredItems.map(item => (
    <Card
      key={item.id} // если есть id
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      onFavorite={onAddToFavorite}
      onPlus={(obj) => onAddToCart(obj)}
      added={isItemAdded(item.id)}
      loading={isLoading}
      {...item}
    />
  ));
};

  return (
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
        {renderItems()}

      </div>

    </div>
  )
}

export default Home;