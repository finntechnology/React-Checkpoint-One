import "./App.css";
import { Products } from "./Product";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      />
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
      <p>Hello {userName === "" ? "there" : userName}</p>
      {userName !== "" && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PIzEFEnXqi-V4mrJs9WaUWG4TuLRIN2AMw&s"
          alt=""
          style={{ width: "100px" }}
        />
      )}
    </div>
  );
}

export default App;
