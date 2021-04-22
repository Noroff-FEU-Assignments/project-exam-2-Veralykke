import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function HotelItem({ id, slug, excerpt, media}) {
  return (
    <Link to={`${id}`}>
    <h5>{slug}</h5>
      <p>{excerpt}</p>
      <div>{media}</div>
    </Link>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default HotelItem;





