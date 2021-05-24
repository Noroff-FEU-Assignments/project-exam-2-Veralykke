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
  title: yup.string().required("Title is required"),
});

export default function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const history = useHistory();
  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
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
      const response = await http.post("/enquiries", data);
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
            <Form.Control type="name" ref={register} placeholder="*Name" />
            {errors.name && <span>{errors.name.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="email" ref={register} placeholder="*Email" />
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="name" ref={register} placeholder="*Price" />
            {errors.title && <span>{errors.title.message}</span>}
          </Form.Group>{" "}
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="name"
              ref={register}
              placeholder="*Max guests"
            />
            {errors.title && <span>{errors.title.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="name" ref={register} placeholder="*Longitude" />
            {errors.title && <span>{errors.title.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="name" ref={register} placeholder="*Latitude" />
            {errors.title && <span>{errors.title.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="message"
              ref={register}
              placeholder="*Description"
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
