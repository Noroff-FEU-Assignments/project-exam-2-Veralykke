import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
} from "react-bootstrap";
import MapBergen from "../map/MapBergen";

function HotelItemDetail({ id, slug, excerpt, guests, price, image }) {
  return (
    <div className="container">
      <div class="row" md={2}>
        <Card className="mt-4" style={{ width: "18 rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <span className="card-info one">Max {guests}</span>
            <span className="card-info two">Price from {price}$</span>
            <Card.Title>
              <h5>{slug}</h5>
            </Card.Title>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
            </Card.Text>
            <Link to={`/booking/${id}`}>
              <Button variant="primary">Book</Button>
            </Link>
            <MapBergen />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

HotelItemDetail.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default HotelItemDetail;
