import { useState, useEffect } from "react";
import { API } from "../../constants/api.js";
import HotelItem from "../hotels/HotelItem";
import  { Card } from "react-bootstrap";
import {Button} from 'react-bootstrap';
//import Heading from "../layout/Heading";

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
  console.log(hotels);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
		  <Card.Text>
          <div className="hotels">
            {hotels.map(function (hotel) {
              const { id, slug } = hotel;
              return <HotelItem key={id} id={id} slug={slug} />;
            })}
          </div>
		  </Card.Text>
		  <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default HotelList;

