import Heading from "../layout/Heading";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default function Home() {
  return ( 
    <>
  <Jumbotron fluid>
  <Container>
  <Heading title="Home" />
     <img src="/" alt="bg-home"/>
     <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
  </div>
  </Container>
  </Jumbotron>
  </>
  )
  }




