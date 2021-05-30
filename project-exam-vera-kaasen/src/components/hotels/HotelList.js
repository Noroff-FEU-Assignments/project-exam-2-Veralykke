import { useState, useEffect } from "react";
import { BASE_API } from "../../constants/api.js";
import { Link } from "react-router-dom";

function HotelList({ search }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const allPagesURL = BASE_API + "hotels";

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
  const filteredHotels =
    search.length === 0
      ? []
      : hotels.filter((hotel) =>
          hotel.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <div className="hotels">
        {filteredHotels.map(function (hotel) {
          const { id } = hotel;
          return (
            <Link to={`/hotel/${id}`}>
              <h5>{hotel.title}</h5>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default HotelList;
/*
////tatt vekk slug
import { useState, useEffect } from "react";
import { BASE_API } from "../../constants/api.js";
import { Link } from "react-router-dom";

function HotelList({ search }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const allPagesURL = BASE_API + "hotels";

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
  const filteredHotels =
    search.length === 0
      ? []
      : hotels.filter((hotel) =>
          hotel.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <div className="hotels">
        {filteredHotels.map(function (hotel) {
          const { id } = hotel;
          return (
            <Link to={`/hotels/${id}`}>
              <h5>{hotel.title}</h5>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default HotelList;*/
