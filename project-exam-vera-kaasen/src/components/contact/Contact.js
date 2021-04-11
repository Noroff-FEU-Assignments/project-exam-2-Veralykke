import Heading from "../layout/Heading";
import { Button, Form } from "react-bootstrap";


export default function Contact() {
  return (
    <>
      <Heading title="Contact us" />
      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label></Form.Label>
    <Form.Control type="name" placeholder="Full name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" placeholder="Message" rows={3} />
  </Form.Group>
      <Button type="submit">Submit</Button>
</Form>
    </>
  );
}
