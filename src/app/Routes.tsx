import React from "react";
import { Redirect, Route } from "react-router-dom";
import RenderPropsPage from "../pages/render-props";

export const Routes = () => (
	<>
		<Route path={"/"} exact>
			<Redirect to={{ pathname: "/render-props" }} />
		</Route>
		<Route path={"/render-props"} exact>
			<RenderPropsPage />
		</Route>
	</>
);