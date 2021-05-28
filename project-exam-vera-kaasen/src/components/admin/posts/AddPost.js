import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../hooks/useAxios";
import Heading from "../../layout/Heading";
import { Form, Button } from "react-bootstrap";
import MediaDropdown from "./MediaDropdown";
import AdminPage from "../AdminPage";

const schema = yup.object().shape({
  name: yup.string().required("Please enter hotel name"),
  descriptions: yup
.string()
.required("Please ass some description")
.min(5, "descriptions should be at least 5 characters"),
price: yup
.number()
.required("Please add price per night")
.positive()
.integer(),
type: yup.string()
});
export default function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const history = useHistory();
  const http = useAxios();

  const { 
    register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    data.status = "publish";

    if (data.featured_media === "") {
      data.featured_media = null;
    }
    try {
      const response = await axios("/", data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AdminPage>
      <Heading title="Create New Establishment" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="name" ref={register} placeholder="* Name" />
            {errors.name && <span>{errors.name.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="name" ref={register} placeholder="* Price" />
            {errors.title && <span>{errors.title.message}</span>}
          </Form.Group>{" "}
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="name"
              ref={register}
              placeholder="* Guests"
            />
            {errors.title && <span>{errors.title.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="message"
              ref={register}
              placeholder="* Description"
            />
            {errors.message && <span>{errors.message.message}</span>}
          </Form.Group>
          <MediaDropdown />
          <hr></hr>
          <Button type="Create">
            {submitting ? "Submitting..." : "Create"}
          </Button>
        </fieldset>
      </form>
    </AdminPage>
  );
}
