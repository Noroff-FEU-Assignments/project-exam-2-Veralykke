import { useState, useEffect } from "react";
import { API } from "../../constants/api.js";
import HotelItem from "../hotels/HotelItem";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

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
            <Card.Link href="#">Max 4</Card.Link>
            <Card.Link href="#">Price from 110$</Card.Link>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <div className="hotels">
                {hotels.map(function (hotel) {
                  const { id, slug, excerpt } = hotel;
                  return <HotelItem key={id} id={id} slug={slug} excerpt={excerpt.rendered}/>;
                })}
              </div>
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
            <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Link href="#">Max 4</Card.Link>
            <Card.Link href="#">Price from 110$</Card.Link>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <div className="hotels">
                {hotels.map(function (hotel) {
                  const { id, slug, excerpt } = hotel;
                  return <HotelItem key={id} id={id} slug={slug} excerpt={excerpt.rendered} />;
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

export default HotelList;
//////////////////////////////////////////////////
/*
 return (
    <>
      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Link href="#">Max 4</Card.Link>
            <Card.Link href="#">Price from 110$</Card.Link>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <div className="hotels">
                {hotels.map(function (hotel) {
                  const { id, slug } = hotel;
                  return <HotelItem key={id} id={id} slug={slug} />;
                })}
              </div>
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            <Card.Text>
              <div className="hotels">
                {hotels.map(function (hotel) {
                  const { id, slug } = hotel;
                  return <HotelItem key={id} id={id} slug={slug} />;
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

export default HotelList;

*/