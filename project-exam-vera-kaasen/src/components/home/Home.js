import Heading from "../layout/Heading";
//import bergen from "./images/bergen.jpg";
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Container from 'react-bootstrap/Container'
import { FormControl, Form, Button } from "react-bootstrap";


export default function Home() {
  return ( 
    <>
     <div id="bg-home"  >
     <Heading title="We bring bergen to you" />

      <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
     
  </Form>
    </div>
  </>
  );
}

