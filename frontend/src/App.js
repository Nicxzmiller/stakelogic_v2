import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Stakelogic</Link>
        </header>
        <main>
          <Routes>
            <Route path="/game/:slug" element={<GameScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
