import React from "react";
import {
	Button,
	Form,
	Checkbox,
	Header,
	Grid,
	Segment,
} from "semantic-ui-react";

function RegisterUI({ form: { onChange, form, registerFormValid, onSubmit } }) {
	return (
		<div>
			<Grid centered>
				<Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
					<Header>Sign Up Here</Header>

					<Segment>
						<Form>
							<Form.Field>
								<Form.Input
									value={form.username || ""}
									onChange={onChange}
									name="username"
									placeholder="Username"
									label="Username"
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.firstName || ""}
									onChange={onChange}
									name="firstName"
									placeholder="First Name"
									label="First Name"
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.lastName || ""}
									onChange={onChange}
									name="lastName"
									placeholder="Last Name"
									label="Last Name"
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.email || ""}
									onChange={onChange}
									name="email"
									placeholder="Email"
									label="Email"
									type="email"
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.password || ""}
									onChange={onChange}
									name="password"
									placeholder="Password"
									label="Password"
									type="password"
								/>
							</Form.Field>

							<Button
								onClick={onSubmit}
								type="submit"
								disabled={registerFormValid}
								fluid
								primary>
								Submit
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default RegisterUI;
