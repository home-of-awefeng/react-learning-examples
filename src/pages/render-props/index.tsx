import React from "react";
import Cat from "./components/Cat";
import Mouse from "./components/Mouse";
import { IMousePosition } from "./types";

export default function RenderPropsPage () {
	// always point to the same function when Mouse component extends PureComponent
	// as `method two` lead to PureComponent not work.
	const renderTheCat = (mouse: IMousePosition) => {
		return <Cat mouse={mouse} />;
	}
	return (
		<div>
			<h1>Move the mouse around!</h1>
			{/* method one */}
			<Mouse render={renderTheCat} />

			{/* method two: `render` prop value is not same with previous value every component rerender  */}
			{/*<Mouse render={(mouse: IMousePosition) => <Cat mouse={mouse} />} />*/}
		</div>
		)
}