import React from "react";
import { Redirect, Route } from "react-router-dom";

export const Routes = () => (
	<>
		<Route path={"/"} exact>
			<Redirect to={{ pathname: "/home" }} />
		</Route>
	</>
);