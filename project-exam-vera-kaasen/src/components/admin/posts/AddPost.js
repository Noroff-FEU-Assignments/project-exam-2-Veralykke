import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import axios from "axios";
import Heading from "../../layout/Heading";
import { Form, Button } from "react-bootstrap";
import AdminPage from "../AdminPage";
import { BASE_URL, HOTELS } from "../../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = BASE_URL + HOTELS;

const schema = yup.object().shape({
  name: yup.string().required("Please enter hotel name"),
  description: yup
    .string()
    .required("Please ass some description")
    .min(5, "descriptions should be at least 5 characters"),
  price: yup
    .number()
    .required("Please add price per night")
    .positive()
    .integer(),
});
export default function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    console.log("clicked");
    const token = auth.jwt;
    await axios.post(
      url,
      {
        title: data.name,
        description: data.description,
        price: parseFloat(data.price),
        guests: parseFloat(data.guests),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  /* addHotel();

    {
      /*setSubmitting(true);
    setServerError(null);
    }

    data.status = "publish";

    if (data.featured_media === "") {
      data.featured_media = null;
    }
    try {
      const response = await axios(url, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  } */

  return (
    <AdminPage>
      <Heading title="Create New Establishment" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="name"
              name="name"
              ref={register}
              placeholder="* Name"
            />
            {errors.name && <span>{errors.name.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="name"
              name="price"
              ref={register}
              placeholder="* Price"
            />
            {errors.title && <span>{errors.title.message}</span>}
          </Form.Group>{" "}
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="name"
              name="guests"
              ref={register}
              placeholder="* Guests"
            />
            {errors.title && <span>{errors.title.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="message"
              name="description"
              ref={register}
              placeholder="* Description"
            />
            {errors.message && <span>{errors.message.message}</span>}
          </Form.Group>
          <hr></hr>
          <Button type="submit">
            {submitting ? "Submitting..." : "Create"}
          </Button>
        </fieldset>
      </form>
    </AdminPage>
  );
}
