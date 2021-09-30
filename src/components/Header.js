import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

function Header() {
	const { pathname } = useLocation();

	return (
		<Menu>
			<Menu.Item as={Link} to="/" style={{ fontSize: 18 }}>
				ContextContacts
			</Menu.Item>
			{pathname === "/" && (
				<>
					<Menu.Item position="right">
						<Button as={Link} to="/contacts/create" primary basic icon>
							<Icon name="add"></Icon>
							Create Contact
						</Button>
					</Menu.Item>
					<Menu.Item>
						<Button color="red" basic icon>
							<Icon name="log out"></Icon>
							Logout
						</Button>
					</Menu.Item>
				</>
			)}
		</Menu>
	);
}

export default Header;
