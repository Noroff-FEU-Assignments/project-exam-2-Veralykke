import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button, CardColumns } from "react-bootstrap";

function HotelItem({ id, slug, excerpt }) {
  return (
    <Link to={`${id}`}>

    <Card.Title><h5>{slug}</h5></Card.Title>
      <Card.Text><p>{excerpt}</p> </Card.Text>
      <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
    </Link>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default HotelItem;
