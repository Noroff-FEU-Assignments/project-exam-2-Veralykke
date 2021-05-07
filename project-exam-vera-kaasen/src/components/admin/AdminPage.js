import Heading from "../layout/Heading";
import AdminNav from "../admin/posts/AdminNav";
import AdminMenu from "./AdminMenu";

//import Nav from "react-bootstrap/Nav";

export default function AdminPage({ children }) {
  return (
    <>
    <AdminNav />
      <Heading title="Holidaze Admin" />
      <AdminMenu />
      {children ? children : <p></p>}
    
    </>
  );
}
