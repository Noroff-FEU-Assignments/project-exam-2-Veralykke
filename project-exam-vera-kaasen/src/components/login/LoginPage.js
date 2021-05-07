import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import AdminNav from "../admin/posts/AdminNav";

export default function LoginPage() {
  return (
    <>
      <AdminNav />
      <Heading title="Login" />
      <LoginForm />
    </>
  );
}
