import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from './logo.png';

import { WavyContainer, WavyLink } from 'react-wavy-transitions';

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar style={{ backgroundColor: '#07002e' }} variant="dark">
            <Container className="">
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img src={Logo} alt="logo" />
                </Navbar.Brand>
              </LinkContainer>
              <nav>
                <button>Refund</button>
              </nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              {/* <Route
                path="/game/:slug"
                element={
                  <>
                    <WavyLink to="/game/:slug" color="#ff44fd">
                      <GameScreen />
                    </WavyLink>
                  </>
                }
              /> */}
              <Route path="/game/:slug" element={<GameScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
