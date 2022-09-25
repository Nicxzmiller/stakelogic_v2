import { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, games: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, games }, dispatch] = useReducer(logger(reducer), {
    games: [],
    loading: true,
    error: '',
  });
  // const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/games');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      //setGames(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Games</h1>
      <div className="games">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          games.map((game) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
