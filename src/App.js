import React from 'react';
import './App.css';
import List from './List';

function App(props) {
  // Displays props in console
  console.log("the props:", props);
  const listItems = props.STORE.lists.map(listItems => {
    return <List
      key={listItems.id}
      header={listItems.header}
      cards={listItems.cardIds.map(id => {return props.STORE.allCards[id]
      })}
    />
  }
  )

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes</h1>
      </header>

      <div className="App-list">
        {listItems}
      </div>
    </main>
  )
}

export default App;
