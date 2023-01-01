import { ProductCard } from "../../features/shopping/components/ProductCard";
import ProductForm from "../../features/stocking/components/productForm";
import { Col, Row, Container } from "react-bootstrap";
import HeaderComponent from "../../components/layout/general/HeaderTitle";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <HeaderComponent title="DASHBOARD" />
      <Container className="dashboardContainer" fluid>
        <Row className="m-0 justify-content-center">
          <Col sm={12} md="auto" lg={3}>
            <ProductForm />
          </Col>
          <Col sm={12} md="auto" lg={9}>
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
