import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function HotelItem({ id, slug, excerpt }) {
  return (
    <Link to={`${id}`}>
    <h5>{slug}</h5>
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





