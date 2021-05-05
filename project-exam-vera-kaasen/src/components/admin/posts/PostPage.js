import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import PostList from "./PostList";

export default function PostPage() {
  return (
    <AdminPage>
      <Heading content="Posts" />
      <p>
        <link to="/Admin/posts/add">Add post</link>
      </p>
      <p>List posts here</p>
      <PostList />
    </AdminPage>
  );
}
