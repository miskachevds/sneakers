import './index.css'
import Card from './components/card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useEffect } from 'react';
import { useState } from 'react';

const arr = [
  // {
  //   "title": "Мужские кроссовки Nike Blazer Mid Suede",
  //   "price": 12999,
  //   "imageUrl": "img/sneakers/1.jpg"
  // },
  // {
  //   "title": "Мужские кроссовки Nike Air Max 270",
  //   "price": 15600,
  //   "imageUrl": "img/sneakers/2.jpg"
  // },
  // {
  //   "title": "Мужские кроссовки Nike Blazer Mid Suede",
  //   "price": 8490,
  //   "imageUrl": "img/sneakers/3.jpg"
  // },
  // {
  //   "title": "Кеды Nike SB Dunk Low Pro ISO",
  //   "price": 5499,
  //   "imageUrl": "img/sneakers/4.jpg"
  // },
  // {
  //   "title": "Кроссовки AIR MAX",
  //   "price": 13520,
  //   "imageUrl": "img/sneakers/5.jpg"
  // },
  // {
  //   "title": "Кроссовки Revolution 7",
  //   "price": 7490,
  //   "imageUrl": "img/sneakers/6.jpg"
  // },
  // {
  //   "title": "Кроссовки Defyallday",
  //   "price": 5073,
  //   "imageUrl": "img/sneakers/7.jpg"
  // },
  // {
  //   "title": "Кроссовки Nike Pegas",
  //   "price": 9490,
  //   "imageUrl": "img/sneakers/8.jpg"
  // }
]

function App() {
  const[items,setItems] = useState([])//для загрузки карточек
  const[cardItems,setCardItems] = useState([])//карты доб в корзине
  const [cardOpened, setCardOpened] = useState(false)//открытие и закрытие корзины

  useEffect(() => {
  fetch('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items').then((res)=> {
    return res.json();
  }).then((json)=>{
    setItems(json);
  })
  },[]);

  return (
    <div className="wrapper">
      {cardOpened ? <Drawer onClose={() => setCardOpened(false)} /> : null}
      <Header onClickCard={() => setCardOpened(true)} />
      <div className="content">

        <div className="content-input">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width="20px" src="/img/search.svg" alt="Search" />
            <input placeholder='Поиск...' />
          </div>
        </div>

        <div className="sneakers">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={() => console.log('Нажали плюс')}
            />
          ))}

        </div>

      </div>
    </div >
  );
}
export default App;

