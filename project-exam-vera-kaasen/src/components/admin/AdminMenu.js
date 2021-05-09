import { Link } from "react-router-dom";

export default function AdmindMenu() {
  return (
    <nav className="admin">
    <Link to="/admin/posts"> POSTS</Link>
    </nav>
  );
}
