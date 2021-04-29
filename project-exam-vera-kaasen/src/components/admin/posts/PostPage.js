import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";

export default function PostPage() {
    return(
        <AdminPage>
        <Heading content="Posts" />
        <p>
            <link to ="/Admin/posts/Add">Add post</link>
        </p>
        <p>List posts here</p>
        </AdminPage>
    );
}