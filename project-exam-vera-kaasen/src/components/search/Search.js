import React from "react";
//import axios from "axios";
import { useState } from "react";
import HotelList from "../hotels/HotelList";

import { FormControl } from "react-bootstrap";

export default function Search() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="search"> 
      <FormControl 
        type="text"
        placeholder="Search Hotels..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="mr-sm-2"
      />
      <HotelList search={search} />
    </div>
  );
}
