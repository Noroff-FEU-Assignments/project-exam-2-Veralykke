import Heading from "../layout/Heading";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import axios from "axios";
//import { Form, Col } from "react-bootstrap";
const url = "";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter an email adress")
    .email("Please enter a valid email adress"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const http = useAxios();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    data.status = "publish";

    console.log(data);
    try {
      const response = await http.post("/contact", data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  console.log(errors);

  return (
    <>
      <Heading className="title-forms" title="Please fill out the form below" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control
            type="name"
            name="name"
            ref={register}
            placeholder="Full name"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={register}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Message"
            ref={register}
            rows={3}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
