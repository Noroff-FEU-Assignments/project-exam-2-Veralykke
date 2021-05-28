import Heading from "../layout/Heading";
import AdminNav from "../admin/posts/AdminNav";
import AdminMenu from "./AdminMenu";
import GetContact from "../admin/posts/GetContact";
import GetEnquiries from "../admin/posts/GetEnquiries";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

export default function AdminPage({ children }) {
  const [auth, setAuth] = useContext(AuthContext);
  let history = useHistory();

  if (auth === null) {
    history.push("/loginPage");
    return "";
  }

  return (
    <>
      
      <Heading title="Holidaze Admin" />

      <h2>Messages</h2>
      <GetContact />

      <h2>Enquiries</h2>
      <GetEnquiries />

      <h2>Create new hotel</h2>
      <AdminMenu />
      {children ? children : <p></p>}
    </>
  );
}
