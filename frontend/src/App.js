import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from './logo.png';

import { WavyContainer, WavyLink } from 'react-wavy-transitions';
import { Link } from 'react-router-dom';
import RefundScreen from './screens/RefundScreen';
import Button from 'react-bootstrap/Button';
import SignInScreen from './screens/SignInScreen';

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
              <nav className="navContainer">
                <Button href="refund">Refund</Button>
                <Button href="signin">Sign In</Button>
                {/* <Link to="/refund">
                  <RefundScreen />
                </Link> */}
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
              <Route path="/refund" element={<RefundScreen />} />
              <Route path="/signin" element={<SignInScreen />} />

              <Route index element={<HomeScreen />} />
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
