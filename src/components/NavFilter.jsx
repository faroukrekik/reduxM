import { Container, Form, Navbar } from "react-bootstrap";
import StarRating from "./StarRating";

const NavFilter = ({ search, handleSearch, starrate, handleRating }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Navbar
        id="nav-bare"
        expand="lg"
        className="bg-body-tertiary"
        style={{ width: "100%" }}
      >
        <Container fluid>
          <Navbar.Brand href="#">F.MOVIES</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <div style={{ display: "flex" }}>
            <Form className="d-flex">
              <Form.Control
                id="search-input"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleSearch}
              />
            </Form>
            <StarRating rating={starrate} handleRating={handleRating} />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavFilter;
