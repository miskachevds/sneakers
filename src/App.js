import './index.css'
import Card from './components/card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: "Мужские кроссовки Nike Blazer Mid Suede",
    price: "12 999",
    imageUrl: "img/sneakers/1.jpg",
  },
  {
    title: "Мужские кроссовки Nike Air Max 270",
    price: "15 600",
    imageUrl: "img/sneakers/2.jpg",
  },
  {
    title: "Мужские кроссовки Nike Blazer Mid Suede",
    price: "8 490",
    imageUrl: "img/sneakers/3.jpg",
  },
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">

        <div className="content-input">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width="20px" src="/img/search.svg" alt="Search" />
            <input placeholder='Поиск...' />
          </div>
        </div>

        <div className="sneakers">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}

        </div>

      </div>
    </div >
  );
}

export default App;