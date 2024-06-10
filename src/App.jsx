import "./App.css";
import { Products } from "./Product";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <Image image={Products.Image} />
      <Card.Body>
        <Name name={Products.name} />
        <Price price={Products.price} />
        <Description description={Products.description} />

        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
