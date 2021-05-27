import { Link } from "react-router-dom";
import AdminPage from "../AdminPage";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

export default function GetPage() {
  return (
    <Container>
      <ListGroup variant="flush">
        <AdminPage>
          <ListGroup.Item>
            <p>Messages:</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Enquiries:</p>
          </ListGroup.Item>
        </AdminPage>
      </ListGroup>
    </Container>
  );
}
