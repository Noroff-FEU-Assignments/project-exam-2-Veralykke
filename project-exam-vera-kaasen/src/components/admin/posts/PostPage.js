import { Link } from "react-router-dom";
import AdminPage from "../AdminPage";
import PostList from "./PostList";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

export default function PostPage() {
  return (
    <Container>
      <ListGroup variant="flush">
        <AdminPage>
          <ListGroup.Item>
            <p>Messages:</p>
            <PostList />
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Enquiries:</p>
            <PostList />
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
              <Link to="/Admin/posts/add">Create New Establishment</Link>
            </p>
          </ListGroup.Item>
        </AdminPage>
      </ListGroup>
    </Container>
  );
}
