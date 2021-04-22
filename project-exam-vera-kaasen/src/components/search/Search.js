import { BASE_API } from "../../constants/api.js";
import HotelItem from "../hotels/HotelItem";
import { useState, useEffect } from "react";
import HotelList from "../hotels/HotelList";
import axios from 'axios';
import { FormControl, Form, Button } from "react-bootstrap";


export default function Search() {
  const [hotels, setHotels] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const searchUrl = BASE_API + "pages";
    axios
        .get(searchUrl)
        .then(res => {
          const hotels = res.data
          setHotels(hotels)
        })
  }, [])

  const filteredHotels = search.length === 0 ? hotels :
  hotels.filter(hotel => hotel.slug.
    toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
    <FormControl  type="text"
       placeholder="Search Hotels..."
       value={search}
       onChange={(e) => setSearch(e.target.value)} className=" mr-sm-2" 
       /> 
    <HotelList hotels={filteredHotels}/>
    </div>
  )
 }

