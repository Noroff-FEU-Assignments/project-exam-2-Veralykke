import { useState, useEffect } from "react";
import { BASE_API } from "../../constants/api.js";
import HotelItem from "./HotelItem";
import { Card,  Button, CardColumns } from "react-bootstrap";
/*import { Button } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";*/

function AllHotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const allPagesURL = BASE_API + "hotel_info";

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
      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              <div className="hotels">
                {hotels.map(function (hotel) {
                  const { id, title, content } = hotel;
                  return (
                    <Card.Title>
                      <span className="card-info one">jsnjn</span>
                      <span className="card-info two">jnkni</span>
                      <HotelItem
                      
                        key={id}
                        id={id}
                        slug={title.rendered}
                        excerpt={content.rendered}
                      />
                    </Card.Title>
                  );
                })}
              </div>
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
      </CardColumns>
    </>
  );
}

export default AllHotels;

/*      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              <div className="hotels">
                {hotels.map(function (hotel) {
                  const { id, title, content } = hotel;
                  return (
                    <Card.Title>
                      <span className="card-info one">jsnjn</span>
                      <span className="card-info two">jnkni</span>
                      <HotelItem
                        key={id}
                        id={id}
                        slug={title.rendered}
                        excerpt={content.rendered}
                      />
                    </Card.Title>
                  );
                })}
              </div>
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
      </CardColumns>*/ 