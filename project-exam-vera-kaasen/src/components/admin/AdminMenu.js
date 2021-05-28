import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';


export default function AdmindMenu() {
  return (
    <nav className="admin">
<ListGroup variant="flush">
  <ListGroup.Item action href="/Admin/posts/add">Create New Establishments</ListGroup.Item>
</ListGroup>
    </nav>
  );
}

