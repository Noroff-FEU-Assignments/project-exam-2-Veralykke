import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_API } from "../../constants/api.js";
import HotelItem from "./HotelItem";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
/*import Figure from "react-bootstrap/Figure";
import FigureCaption from 'react-bootstrap/FigureCaption';
import FigureImage from 'react-bootstrap/FigureImage'*/
import { Card, Button, CardColumns } from "react-bootstrap";

function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const singlePageURL = BASE_API  + `page/${id}`

  const { id } = useParams();
  const singlePageURL = BASE_API + "" + `hotel_info/${id}`;
  let history = useHistory();
  if (!id) {
    history.push("/");
  }

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(singlePageURL);

        if (response.ok) {
          const json = await response.json();
          setHotel(json);
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
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <HotelItem
        key={hotel.id}
        id={hotel.id}
        slug={hotel.title.rendered}
        excerpt={hotel.content.rendered}
      />
    </>
  );
}

export default HotelDetail;

/////
/*<Figure>
<Figure.Image
  width={171}
  height={180}
  alt="171x180"
  src="holder.js/171x180"
/>
<Figure.Caption>
  <div className="hotel-detail">
    <h1>{hotel.title}</h1>
  </div>
  <p>hshrshs</p>
  <Button type="submit">Submit</Button>
</Figure.Caption>
</Figure>*/
