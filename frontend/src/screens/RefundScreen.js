import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function RefundScreen() {
  return (
    <div>
      <Helmet>
        <title>Refund</title>
      </Helmet>
      <h1>Refund</h1> <hr />
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Token</Form.Label>
            <Form.Select>
              <option value="">Select Token</option>
              <option value="">OFFLINE_TOKEN</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Player ID</Form.Label>
            <Form.Control
              type="text"
              name="playerId"
              placeholder="Enter PlayerID"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Currency</Form.Label>
            <Form.Select>
              <option value="">Select Currency</option>
              <option value="Eur">EUR</option>
              <option value="USD">USD</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Game ID</Form.Label>
            <Form.Select>
              <option value="">Select GameID</option>
              <option value="">LC3101</option>
              <option value="">LC3102</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Win Amount</Form.Label>
            <Form.Control
              type="decimal"
              name="winAmount"
              placeholder="Enter Win Amount"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Bet Amount</Form.Label>
            <Form.Control
              type="decimal"
              name="betAmount"
              placeholder="Enter Bet Amount"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default RefundScreen;

// token select
// playerId
// currency(select)
// gameId (select)
// winAmount
// betAmount
