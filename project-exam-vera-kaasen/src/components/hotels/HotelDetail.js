import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_API, HOTELS } from "../../constants/api.js";
import HotelItemDetail from "./HotelItemDetail";
import { Card, Button, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as React from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import MapBergen from "../map/MapBergen";

function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const singlePageURL = BASE_API  + `page/${id}`

  const { id } = useParams();
  const singlePageURL = BASE_API + HOTELS + `/${id}`;
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
      <HotelItemDetail
        key={hotel.id}
        id={hotel.id}
        guests={hotel.guests}
        price={hotel.price}
        slug={hotel.title}
        excerpt={hotel.description}
        image={hotel.image_url}
      />
    </>
  );
}

export default HotelDetail;
