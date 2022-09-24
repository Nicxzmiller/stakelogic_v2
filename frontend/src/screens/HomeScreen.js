import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Games</h1>
      <div className="games">
        {data.games.map((game) => (
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
