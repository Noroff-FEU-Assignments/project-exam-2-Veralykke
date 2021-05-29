import { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { BASE_API, ENQUIRY } from "../../../constants/api.js";
import AuthContext from "../../context/AuthContext";

export default function GetEnquiries() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(function () {
    async function fetchData() {
      const token = auth.jwt;
      try {
        axios
          .get(BASE_API + ENQUIRY, {
            headers: {
              Authorization: `Bearer ${token}`,
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
            return (
              <li key={post.id}>
                {post.name}
                <hr></hr>
                {post.email}
                <hr></hr>
                {post.message}
                <hr></hr>
                {post.date}
              </li>
            );
          })}
        </ul>
      </Card.Body>
    </>
  );
}
