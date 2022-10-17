import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import LoadingSpin from 'react-loading-spin';
import { Helmet } from 'react-helmet-async';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, game: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function GameScreen() {
  const params = useParams();
  const { slug } = params;
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [{ loading, error, game }, dispatch] = useReducer(reducer, {
    game: [],
    loading: true,
    error: '',
  });
  // const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/games/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }

      //setGames(result.data);
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div className="games">
      <LoadingSpin />
    </div>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={12}>
          <Helmet>
            <title>{game.name}</title>
          </Helmet>
          <h1>{game.name}</h1>
          <hr />
          {/* <img className="img-large" src={game.image} alt={game.name} /> */}
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            {game.betTypes &&
              game.betTypes.map((item) => (
                <ListGroup.Item
                  key={item.name}
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#07002e',
                    borderRadius: '7px',
                  }}
                >
                  <Button
                    variant="success"
                    className="btn btn-info btn-lg"
                    onClick={handleShow}
                  >
                    <h6>{item.name}</h6>
                  </Button>
                  <Modal show={show} onHide={handleClose} keyboard={false}>
                    <Modal.Header>
                      <Modal.Title>Bet Description</Modal.Title>
                    </Modal.Header>
                    <Modal.Body key={item.description}>
                      {item.description}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}

export default GameScreen;
