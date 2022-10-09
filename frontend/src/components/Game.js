import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

function Game(props) {
  const { game } = props;
  return (
    <Card>
      <Link to={`/game/${game.slug}`}>
        <img src={game.image} className="card-img-top" alt={game.name} />
      </Link>
      <Card.Body>
        <Link to={`/game/${game.slug}`} style={{ textDecoration: 'none' }}>
          <Card.Title>{game.name}</Card.Title>
        </Link>
        {/* <Card.Text></Card.Text> */}
        {/* <Button>View Bet/Win Types</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Game;
