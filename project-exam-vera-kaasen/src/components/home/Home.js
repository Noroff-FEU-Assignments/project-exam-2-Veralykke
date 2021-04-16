import { FormControl, Form, } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
    <Container>
    <div className="container-home">
        <p className="we-bring-text">We bring</p>
        <h1 className="h1-home">Bergen</h1>
        <p>To you</p>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <img src="/images/bergen.jpg" alt="bg-bergen" id="bg-home"></img>
        </div>
        </Container>
    </>
  );
}













