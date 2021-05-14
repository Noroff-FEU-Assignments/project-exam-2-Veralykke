import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Card, Button, CardColumns } from "react-bootstrap";
import { BASE_API } from "../../../constants/api.js";
export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const allPosts = BASE_API + "contact";

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(allPosts);

        if (response.ok) {
          const json = await response.json();
          setPosts(json);
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
      <Card.Body>
        <ul>
          {posts.map((post) => {
            return (
              <li>
                <Link to={`/Admin/posts/${post.id}`}>
                  {post.title.rendered}
                </Link>
              </li>
            );
          })}
        </ul>
      </Card.Body>
    </>
  );
}
