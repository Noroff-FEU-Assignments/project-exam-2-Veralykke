import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../hooks/useAxios";
import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import { Button, Form , Col} from "react-bootstrap";
import MediaDropdown from "./MediaDropdown";

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
      const response = await http.post("/posts", data);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <FormError>{serverError}</FormError>}
     <fieldset disabled={submitting}>
     <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="title" ref={register} placeholder="*Name" />
          {errors.title && <span>{errors.title.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="title" ref={register} placeholder="*Email" />
          {errors.title && <span>{errors.title.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="title" ref={register} placeholder="*Price" />
          {errors.title && <span>{errors.title.message}</span>}
        </Form.Group>   <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="title" ref={register} placeholder="*Max guests" />
          {errors.title && <span>{errors.title.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="title" ref={register} placeholder="*Longitude" />
          {errors.title && <span>{errors.title.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="title" ref={register} placeholder="*Latitude" />
          {errors.title && <span>{errors.title.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="title" ref={register} placeholder="*Description" />
          {errors.title && <span>{errors.title.message}</span>}
        </Form.Group>
      <MediaDropdown />
      <hr></hr>
      <Button type="Create">{submitting ? "Submitting..." : "Create"}</Button>
        </fieldset>
        </Form>
    </AdminPage>
  );
}

