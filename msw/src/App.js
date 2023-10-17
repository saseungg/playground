import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [foodList, setFoodList] = useState([]);
  const [newFood, setNewFood] = useState('');

  const fetchData = () => {
    fetch('/foods')
      .then((res) => res.json())
      .then((data) => setFoodList(data));
  };

  useEffect(() => {
    fetchData(); // 처음 마운트시만 useFetch가 실행됨.
  }, []);

  const handleAddFood = async (e) => {
    e.preventDefault();

    await fetch('/foods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFood),
    });

    fetchData();
    setNewFood('');
  };

  return (
    <div>
      <p>🍕 오늘 내가 먹은 음식은? 🍔</p>
      {foodList.map((food) => (
        <li key={food.id}>{food.name}</li>
      ))}
      <form onSubmit={handleAddFood}>
        <input
          type="text"
          placeholder="또 뭐먹었어?"
          onChange={(e) => setNewFood(e.target.value)}
          value={newFood}
        ></input>
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default App;
