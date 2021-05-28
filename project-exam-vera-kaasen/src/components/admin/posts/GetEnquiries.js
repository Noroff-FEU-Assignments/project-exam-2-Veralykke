import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import { BASE_API, ENQUIRY } from "../../../constants/api.js";

export default function GetEnquiries() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        axios
          .get(BASE_API + ENQUIRY, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
          })
          .then((response) => {
            setPosts(response.data);
          })
          .catch((e) => {
            setError("An error occured");
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        setError(error.toString());
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
      <Card.Body>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.name}<hr></hr>{post.email}<hr></hr>{post.message}<hr></hr>{post.date}</li>;
          })}
        </ul>
      </Card.Body>
    </>
  );
}
