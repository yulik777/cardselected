import React from 'react';
import logo from './logo.svg';
import styles from './App.css'

import Card from './components/cards.jsx';

const cards = [
  {
    name:"Безлимитный 300",
    price:"300",
    speed:"до 10 мБит/cек",
    text:"Объем включенного трафика не ограничен"
  },
  {
    name:"Безлимитный 450",
    price:"450",
    speed:"до 50 мБит/cек",
    text:"Объем включенного трафика не ограничен"
  },
  {
    name:"Безлимитный 550",
    price:"550",
    speed:"до 100 мБит/cек",
    text:"Объем включенного трафика не ограничен",
    isSelected: true
  },
  {
    name:"Безлимитный 1000",
    price:"1000",
    speed:"до 200 мБит/cек",
    text:"Объем включенного трафика не ограничен"
  }
]

function App (){ 
  
  return (
    <div>
    <div className={App}>
      <div className='container'>
    {
      cards.map((card) =>
      <Card name={card.name} price={card.price} speed={card.speed} text={card.text}
      isSelected={card.isSelected}></Card>
      )
  }
  </div>
</div>
    </div>
  );
}

export default App;

