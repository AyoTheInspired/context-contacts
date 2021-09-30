const routes = [
	{ path: "/auth/register", component: RegisterComponent, title: "Register" },
	{ path: "/auth/login", component: LoginComponent, title: "Login" },
	{ path: "/", ContactsComponent, title: "Contacts" },
	{
		path: "/contacts/create",
		component: "CreateContactComponent",
		title: "Create Contacts",
	},
];
