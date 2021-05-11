import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import { Button, Form, FormControl } from "react-bootstrap";
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

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    //console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
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
          <div className="login">
            <input className="login" name="username" placeholder="username" ref={register} />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>
          <div>
            <input 
              name="password"
              placeholder="Password"
              ref={register}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
        <Button variant="primary" type="submit">
         Log in
        </Button>
          {/*<button>={"ubmitting" ? "Loggin In..." : "Login"}</button>*/}
        </fieldset>
      </form>
    </>
  );
}

//////////////BOTSTRAP
/*
      {loginError && <FormError>{loginError}</FormError>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={register} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={register} />
        </Form.Group>
        <input type="submit" value="Log In" />
        <Button variant="primary" type="submit">
         Log in
        </Button>
        </Form>
*/


