import { useState, useEffect } from "react";
import {API } from "../../constants/api.js";
import { Link } from "react-router-dom";
import useAxios from "../../components/hooks/useAxios";

function MediaLiist({ register }) {
  const [media, setMedia, ] = useState([]);



  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("wp/v2/media");
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
       <option value="">Select media</option>
       {media.map((media) => {
           return (
               <option key={media.id} value={media.id}>
                   {media.title.rendered}
               </option>
           );
       })}
   </select>
    </>
  );
}

export default HotelList;
