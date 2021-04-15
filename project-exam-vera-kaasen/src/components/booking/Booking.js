import Heading from "../layout/Heading";
import { Button, Form } from "react-bootstrap";

 // NB ADD DATE FORMATTER
export default function Booking() {
  return (
    <>
      <Heading title="Booking" />
      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label></Form.Label>
    <Form.Control type="name" placeholder="Full name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>


  
      <Button type="submit">Submit</Button>
</Form>
    </>
  );
}
