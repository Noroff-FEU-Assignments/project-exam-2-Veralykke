
//import bergen from "./images/bergen.jpg";
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Container from 'react-bootstrap/Container'
import { FormControl, Form, Button } from "react-bootstrap";


export default function Home() {
  return ( 
    <>
     <div id="bg-home">
      <p>We bring</p>
      <h1>Bergen</h1>
      <p>To you</p>
      <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
  </Form>
    </div>
  </>
  );
}

