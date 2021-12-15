import react from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <div style={{ background: "skyblue", padding: 20, textAlign: "center",marginBottom:20 }}>
      <h1 className="display-3">Learn Code with Hitesh</h1>
      <p>
        Make quality education in reach of everyone. Latest and greatest
        content, that is way more cheaper than ordering food on swiggy
      </p>
      <hr />
      <Container>
        <Button color="primary" >Start Using</Button>
      </Container>
    </div>
  );
};

export default Home;
