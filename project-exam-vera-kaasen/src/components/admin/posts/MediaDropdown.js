import { useState, useEffect } from "react";
import { BASE_API } from "../../../constants/api.js";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

export default function MediaDropdown({ register }) {
  const [better_featured_image, setMedia] = useState([]);

  const http= useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("media")
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
   <select name="featured_media" ref={register}>
       {better_featured_image.map((better_featured_image) => {
           return (
               <option key={better_featured_image.id} value={better_featured_image.id}>
                   {better_featured_image.source_url}
               </option>
           );
       })}
   </select>
    </>
  );
}


