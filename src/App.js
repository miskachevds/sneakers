import './index.css'
import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


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
  const [items, setItems] = useState([])//для загрузки карточек
  const [cardItems, setCardItems] = useState([])//карты доб в корзине
  const [favorites, setFavorites] = useState([])//карты доб в корзине
  const [searchValue, setSearchValue] = useState('')//поиск
  const [cardOpened, setCardOpened] = useState(false)//открытие и закрытие корзины

  useEffect(() => {
    // fetch('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items').then((res)=> {
    //   return res.json();
    // }).then((json)=>{
    //   setItems(json);
    // })

    axios.get('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items').then(response => {
      setItems(response.data);
    })
    axios.get('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items').then(response => {
      setCardItems(response.data);
    })

  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items', obj);
    setCardItems((prev) => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://68b190d7a860fe41fd5ee2d7.mockapi.io/items/${id}`);
    setCardItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://68b190d7a860fe41fd5ee2d7.mockapi.io/items', obj);
    setFavorites((prev) => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cardOpened && <Drawer items={cardItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCard={() => setCardOpened(true)} />
      <Routes>
        <Route path='/' element={<Home items={items}
          searchValue={searchValue} setSearchValue={setSearchValue} 
          onChangeSearchInput={onChangeSearchInput} 
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>


    </div >
  );
}
export default App;

