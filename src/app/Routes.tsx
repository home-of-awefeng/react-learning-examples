import React from "react";
import { Redirect, Route } from "react-router-dom";
import RenderPropsPage from "../pages/render-props";
import ContextPage from "../pages/context";
import UseMemoPage from "../pages/hook-use-memo";

export interface IRoute {
	path: string;
	title?: string;
	redirect?: string;
	component?: JSX.Element;
}

export const routes: Array<IRoute> = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		title: 'Home'
	},
	{
		path: '/context',
		title: 'Context',
		component: <ContextPage />
	},
	{
		path: '/render-props',
		title: 'Render Props',
		component: <RenderPropsPage />
	},
	{
		path: '/use-memo',
		title: 'UseMemo',
		component: <UseMemoPage />
	}
];

export const Routes = () => (
	<>
		{
			routes.map((route: IRoute) => (
				<Route key={route.path} path={route.path} exact>
					{ route.redirect && <Redirect to={{ pathname: route.redirect }} /> }
					{ route.component && route.component }
				</Route>
			))
		}
	</>
);