import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Stakelogic</a>
      </header>
      <main>
        <h1>Featured Games</h1>
        <div className="games">
          {data.games.map((game) => (
            <div className="game" key={game.slug}>
              <a href={`/game/${game.slug}`}>
                <img src={game.image} alt={game.name} />
              </a>
              <div className="game-info">
                <a href={`/game/${game.slug}`}>
                  <p>{game.name}</p>
                </a>
                <p>{game.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
