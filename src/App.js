

import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

import Header from '~/components/header'
import Slider from "~/components/slider";
import Work from "./components/work";
import Services from "./components/services";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return ( 
    <div className='main'>
      <Header />
      <Slider/>
      <Work  />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
   );
}

export default App;