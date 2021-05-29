import { useState, useEffect } from "react";
import { BASE_API } from "../../../constants/api.js";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

export default function MediaDropdown({ register }) {
  const [image_url, setMedia] = useState([]);

  const http= useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await axios("media")
        console.log("response", response);
        setMedia(response.data);
      } catch (error) {
          console.log(error);
      }
    }

    getMedia();

  }, []);

  return (
    <>
   <select name="media" ref={register}>
       {image_url.map((image_url) => {
           return (
               <option key={image_url.id} value={image_url.id}>
                   {image_url.source_url}
               </option>
           );
       })}
   </select>
    </>
  );
}


