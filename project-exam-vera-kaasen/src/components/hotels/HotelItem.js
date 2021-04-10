import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HotelItem({ id, slug }) {
  return (
    <Link to={`${id}`}>
      <h5>{slug}</h5>
    </Link>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default HotelItem;