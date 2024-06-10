import Card from "react-bootstrap/Card";

const Image = ({ image }) => {
  return <Card.Img variant="top" src={image} />;
};

export default Image;
