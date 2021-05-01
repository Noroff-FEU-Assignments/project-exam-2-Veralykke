import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button, CardColumns } from "react-bootstrap";

function HotelItem({ id, slug, excerpt }) {
  return (
    <CardColumns>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Link to={`${id}`}>
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
        </Card.Body>
      </Card>
    </CardColumns>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default HotelItem;
