import { Link } from "react-router-dom";

export default function AdmindMenu() {
    return (
        <nav className="admin">
            Section: <Link to ="/admin/posts">Posts</Link>
        </nav>
    );
}