import Card from './components/card/Card'
import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [cardlist, setcardlist] = useState([]);
  const [newCard, setnewCard] = useState("");
  function addCard(e){
    e.preventDefault();
    setcardlist([...cardlist,newCard]);
  }

  return (
    <>
      <h2>To do App</h2>
      <div className='flex'>
        
        <Card  heading="To-do" className='card' />
        <Card  heading="Doing" className="card" />
        <Card  heading="Done" className="card" />

          {cardlist.map(card=> {
            return <>
                <Card key={card} heading={card} />
              </>
            } )
          }
          <form className='card'>
          <input name="newCard" placeholder="add new Card" value={newCard} onChange={(e)=>setnewCard(e.target.value)}/>
          <button onClick={addCard}>Add a card</button>
        </form>
      </div>

    </>
  );
}

export default App;
