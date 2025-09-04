import './index.css'
import Card from './components/card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'


// const arr = [
//   {
//     "title": "Мужские кроссовки Nike Blazer Mid Suede",
//     "price": 12999,
//     "imageUrl": "img/sneakers/1.jpg"
//   },
//   {
//     "title": "Мужские кроссовки Nike Air Max 270",
//     "price": 15600,
//     "imageUrl": "img/sneakers/2.jpg"
//   },
//   {
//     "title": "Мужские кроссовки Nike Blazer Mid Suede",
//     "price": 8490,
//     "imageUrl": "img/sneakers/3.jpg"
//   },
//   {
//     "title": "Кеды Nike SB Dunk Low Pro ISO",
//     "price": 5499,
//     "imageUrl": "img/sneakers/4.jpg"
//   },
//   {
//     "title": "Кроссовки AIR MAX",
//     "price": 13520,
//     "imageUrl": "img/sneakers/5.jpg"
//   },
//   {
//     "title": "Кроссовки Revolution 7",
//     "price": 7490,
//     "imageUrl": "img/sneakers/6.jpg"
//   },
//   {
//     "title": "Кроссовки Defyallday",
//     "price": 5073,
//     "imageUrl": "img/sneakers/7.jpg"
//   },
//   {
//     "title": "Кроссовки Nike Pegas",
//     "price": 9490,
//     "imageUrl": "img/sneakers/8.jpg"
//   }
// ]

function App() {
  const[items,setItems] = useState([])//для загрузки карточек
  const[cardItems,setCardItems] = useState([])//карты доб в корзине
  const[searchValue,setSearchValue] = useState('')//поиск
  const [cardOpened, setCardOpened] = useState(false)//открытие и закрытие корзины

  useEffect(() => {
  // fetch('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items').then((res)=> {
  //   return res.json();
  // }).then((json)=>{
  //   setItems(json);
  // })

  axios.get('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items').then(response=>{
    setItems(response.data);
  })
  axios.get('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items').then(response=>{
    setCardItems(response.data);
  })

  },[]);

  const onAddToCart = (obj) =>{
    axios.post('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items', obj);
    setCardItems((prev)=>[...prev, obj] );
  }

  const onRemoveItem = (id) =>{
    axios.delete(`https://68b190d7a860fe41fd5ee2d7.mockapi.io/items/${id}`);
    setCardItems((prev)=>prev.filter(item => item.id !== id) );
  }
 
  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cardOpened && <Drawer items = {cardItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCard={() => setCardOpened(true)} />
      <div className="content">

        <div className="content-input">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block">
            <img width="20px" src="/img/search.svg" alt="Search" />
            {searchValue  && <img onClick={()=>setSearchValue('')} className='removeBtn' width='13px' src="/img/btn-remove.svg" alt="Clear"/> }
            <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
          </div>
        </div>

        <div className="sneakers">
          {items.filter(item=>item.title.toLowerCase().includes(searchValue)).map((item,index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj)=> onAddToCart(obj)}
            />
          ))}

        </div>

      </div>
    </div >
  );
}
export default App;

