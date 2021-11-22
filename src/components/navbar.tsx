import { Button, Navbar, Nav, NavDropdown, Container, Form, FormControl } from 'react-bootstrap';
import language from "../assets/img/favpng_earth-icon-language-icon-planet-icon.png"

const Navba: React.FC = () => {
    const img = (
        <img src={language} alt="img" width="30" height="30" />
    )
    return (
        <div>
            <Navbar bg="navbar navbar-expand-md navbar-dark fixed-top bg-dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/main"><img src="https://upload.wikimedia.org/wikipedia/th/0/08/DotA2.jpg" alt="DOTA2" style={{ width: "100px", height: "50px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/main" className="font-weight-bold" style={{ fontSize: "18px" }}>Home</Nav.Link>
                            <Nav.Link href="strength" style={{ fontSize: "18px" }}>Strength</Nav.Link>
                            <Nav.Link href="/agility" style={{ fontSize: "18px" }}>Agility</Nav.Link>
                            <Nav.Link href="/Intelligent" style={{ fontSize: "18px" }}>Intelligent</Nav.Link>
                            <NavDropdown title="community" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://www.dota2.com/news">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="http://www.dota2.com/store/">Store</NavDropdown.Item>
                                <NavDropdown.Item href="http://steamcommunity.com/app/570">Steam Hub</NavDropdown.Item>
                                <NavDropdown.Item href="https://twitter.com/dota2wiki">Twitter</NavDropdown.Item>
                                <NavDropdown.Item href="http://www.facebook.com/pages/Dota-2/106876872711112">Facebook</NavDropdown.Item>
                            </NavDropdown>


                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title={img} id="basic-nav-dropdown">
                                <NavDropdown.Item href="a">ไทย</NavDropdown.Item>
                                <NavDropdown.Item href="b">English</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navba;