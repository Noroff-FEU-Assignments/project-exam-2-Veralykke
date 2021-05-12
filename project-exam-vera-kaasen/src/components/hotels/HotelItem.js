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
import MapBergen from "../map/MapBergen";


function HotelItem({ id, slug, excerpt }) {
  return (
    <div className="container">
      <div class="row" md={2}>
      <Card className="mt-4" style={{ width: "18 rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Link to={`/hotel/${id}`}>
            <span className="card-info one">jsnjn</span>
            <span className="card-info two">jnkni</span>
            <Card.Title>
              <h5>{slug}</h5>
            </Card.Title>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Link>
          <MapBergen/>
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
