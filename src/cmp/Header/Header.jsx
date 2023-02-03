import {
	Navbar,
	Container,
	Nav,
	NavDropdown
} from "react-bootstrap";

import {Link} from "react-router-dom";
import Menu from "../../json-api/Menu";
import Brand from "../../json-api/Brand";

const Header = ()=>{
	const design = (
		<>
		<Navbar bg="light" expand="lg">
		<Container>
			<Link className="navbar-brand" to={Brand.website}>{Brand.name}</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="justify-content-end w-100">
				{
					Menu.map((data)=>{
						return <Link  className="nav-link" to={data.url}>{data.label}</Link>
					})
				}
			</Nav>
			</Navbar.Collapse>
		</Container>
		</Navbar>
		</>
	);
	return design;
}
export default Header;