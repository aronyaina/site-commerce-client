import { ProductCard } from "../../features/shopping/components/ProductCard";
import ProductForm from "../../features/stocking/components/productForm";
import { Col, Row, Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="dashboard" fluid>
      <Row className="m-0 justify-content-center">
        <Col sm={12} md="auto" lg={3}>
          <ProductForm />
        </Col>
        <Col sm={12} md="auto" lg={9}>
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
