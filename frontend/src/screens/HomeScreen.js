import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import data from '../data';

function HomeScreen() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/games');
      setGames(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Games</h1>
      <div className="games">
        {games.map((game) => (
          <div className="game" key={game.slug}>
            <Link to={`/game/${game.slug}`}>
              <img src={game.image} alt={game.name} />
            </Link>
            <div className="game-info">
              <Link to={`/game/${game.slug}`}>
                <p>{game.name}</p>
              </Link>
              <p>{game.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
