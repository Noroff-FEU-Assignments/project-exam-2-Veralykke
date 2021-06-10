import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import { Button, Form } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("please enter your username"),
  password: yup.string().required("please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(e) {
    setSubmitting(true);
    setLoginError(null);

    const data = {
      identifier: e.username,
      password: e.password,
    };

    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      history.push("/adminPage");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              className="login"
              name="username"
              type="username"
              ref={register}
              placeholder="*Username"
            />
            {errors.username && <span>{errors.username.message}</span>}
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              name="password"
              ref={register}
              placeholder="*Password"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </Form.Group>

      
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </fieldset>
      </form>
    </>
  );
}
