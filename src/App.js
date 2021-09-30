// import logo from "./logo.svg";
// import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import { GlobalProvider } from "./context/Provider";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					{routes.map((route, index) => (
						<Route
							key={index + 1}
							path={route.path}
							exact
							render={(props) => <route.component {...props} />}
						/>
					))}
				</Switch>
			</Router>
		</div>
	);
}

export default App;

console.log("here");
