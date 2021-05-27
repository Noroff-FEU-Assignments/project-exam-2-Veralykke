import Heading from "../layout/Heading";
import AdminNav from "../admin/posts/AdminNav";
import AdminMenu from "./AdminMenu";
import GetContact from "../admin/posts/GetContact";
import GetEnquiries from "../admin/posts/GetEnquiries";

export default function AdminPage({ children }) {
  return (
    <>
      <AdminNav />
      <Heading title="Holidaze Admin" />

      <h2>Contact Messages:</h2>
      <GetContact />

      <h2>Enquirieres:</h2>
      <GetEnquiries />

      <AdminMenu />
      {children ? children : <p></p>}
    </>
  );
}
