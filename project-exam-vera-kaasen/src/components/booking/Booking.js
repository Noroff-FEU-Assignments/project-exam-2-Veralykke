import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { BASE_API, ENQUIRY } from "../../constants/api";

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

export default function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    const response = await axios.post(BASE_API + ENQUIRY, {
      name: data.name,
      email: data.email,
      message: data.message,
      date_start: data.date,
    });
    
    console.log(response.data);
  }

  console.log(errors);

  return (
    <>
      <Heading className="title-forms" title="Please fill out the form below" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            ref={register}
            placeholder="Full name"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={register}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            placeholder="Message"
            ref={register}
            rows={3}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </Form.Group>
        <div>
          <div className="row">
            <div className="col-md-4">
              <Form.Group controlId="dob">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
