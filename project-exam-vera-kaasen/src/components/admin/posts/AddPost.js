import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";

export default function PostPage() {
  return (
    <AdminPage>
      <Heading content="Add post" />
      <form onSubmit={handleSubmit(onSumbit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="title" placeholder="Title" ref={register} />
          </div>
        </fieldset>
      </form>
    </AdminPage>
  );
}
