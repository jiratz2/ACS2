import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Water the dishes', isChecked: false },
    { id: 2, title: 'Clean the cat', isChecked: false },
    { id: 3, title: 'Wash the car', isChecked: false },
  ]);

  const [showAll, setShowAll] = useState(true);

  const handleShow = () => {
    setShowAll(true);
  };

  const handleHide = () => {
    setShowAll(false);
  };

  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const filteredItems = showAll
    ? items
    : items.filter((item) => !item.isChecked);

  return (
    <>
      <button onClick={handleShow}>Show all</button>
      <button style={{ marginLeft: '5px' }} onClick={handleHide}>
        Hide done
      </button>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          marginTop: '10px',
        }}
      >
        {filteredItems.map((item) => (
          <div key={item.id} style={{ padding: '5px' }}>
            <label>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleCheck(item.id)}
              />
              {item.title}
            </label>
          </div>
        ))}
      </form>
    </>
  );
}

export default App;
