import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './Drawer';

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
          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </div>
    </div >
  );
}

export default App;