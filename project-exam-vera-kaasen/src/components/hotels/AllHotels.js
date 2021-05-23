import { useState, useEffect } from "react";
import { BASE_API, HOTELS } from "../../constants/api.js";
import HotelItem from "./HotelItem";
import { Card, CardColumns } from "react-bootstrap";

function AllHotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const allPagesURL = BASE_API + HOTELS;

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(allPagesURL);

        if (response.ok) {
          const json = await response.json();
          setHotels(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      <Card.Body>
        <Card.Text>
          <div className="hotels">
            {hotels.map(function (hotel) {
              const { id, title, description, guests, price, image_url } =
                hotel;
              return (
                <Card.Title>
                  <HotelItem
                    key={id}
                    id={id}
                    slug={title}
                    excerpt={description}
                    guests={guests}
                    price={price}
                    image={image_url}
                  />
                </Card.Title>
              );
            })}
          </div>
        </Card.Text>
      </Card.Body>
    </>
  );
}

export default AllHotels;
