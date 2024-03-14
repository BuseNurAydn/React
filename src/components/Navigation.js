import { Container} from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

//NAVİGATİON COMPONENTİ
const Navigation = () => {
    return(
    <Navbar bg="dark" data-bs-theme="dark" style={{ marginTop: '10px' }}>
        <Container>
            <Navbar.Brand>React Blog</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Blog Listesi</Nav.Link>
                <Nav.Link as={Link} to="/blogEkle">Blog Ekle</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

   )
}
export default Navigation;