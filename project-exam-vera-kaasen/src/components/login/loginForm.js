import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { API, TOKEN_PATH } from "../../constants/api";

const url = API + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("please enter your username"),
  password: yup.string().required("please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
//IMPORT FORM BLABLA FRA BOOTSTRAP
/* <form onSubmit={handleSubmit(onSubmit)}>
            {loginError && <FormError>{loginError}</FormError>}
            <fieldset disabled={submitting}>
                <div>
                    <input name="username placeholder="username ref={register} />
                    {errors.username && <FormError>{errors.username.message}</FormError>}
                </div>

                <div>
                    <input name="password" placeholder="Password" ref={register} type="password" />
                    {errors.password && <FormError>{errors.password.message}</FormError>}
                </div>
                <button>{submitting ? "Loggin in..." : "Login"}</button>
            </fieldset>
        </form> 
        )
}
export default LoginForm;
*/
