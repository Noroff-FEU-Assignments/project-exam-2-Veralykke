import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardColumns,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function HotelItem({ id, slug, excerpt, guests, price, image }) {
  return (
    <div className="container">
      <div class="row" md={2}>
        <Card className="mt-4" style={{ width: "18 rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Link to={`/hotel/${id}`}>
              <span className="card-info one">Max {guests}</span>
              <span className="card-info two">Price from {price}$</span>
              <Card.Title>
                <h5>{slug}</h5>
              </Card.Title>
              <Card.Text>
                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default HotelItem;
