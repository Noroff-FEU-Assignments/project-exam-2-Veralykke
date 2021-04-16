import { API } from "../../constants/api.js";
import HotelItem from "../hotels/HotelItem";
import { useState, useEffect } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
//import { Container } from "react-bootstrap";
//import bergen from "/images/bergen.jpg";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = () => {};

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
    <div className="container-home">
        <p className="we-bring-text">We bring</p>
        <h1 className="h1-home">Bergen</h1>
        <p>To you</p>
        <Form inline>
          <FormControl type="text" placeholder="Search"  term= {searchTerm} searchKeyword={ searchHandler } className="mr-sm-2" />
          <div className="hotels">
          {hotels.map(function (hotel) {
                  const { id, slug, } = hotel;
                  return <HotelItem key={id} id={id} slug={slug}/>;
                })}
              </div>
        </Form>
        <img src="/images/bergen.jpg" alt="bg-bergen" id="bg-home"></img>
        </div>
    </>
  );
}


export default Home;


