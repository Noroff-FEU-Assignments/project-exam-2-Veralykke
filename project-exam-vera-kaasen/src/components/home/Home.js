
import { Container } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Search from "../search/Search";


export default function Home() {
  return (
    <>
    <Jumbotron>
    <Container >
      <img src="/images/bergen.jpg" className="img-fluid"></img>
      <figure className="position-relative">
        <p className="txt-home">We bring</p>
        <h1 className="h1-home">Bergen</h1>
        <p className="txt-home">To you</p>
        </figure>
       <Search />
       </Container>
       </Jumbotron>
      </>
  );
}








