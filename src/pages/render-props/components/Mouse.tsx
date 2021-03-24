import React, { MouseEvent, PureComponent } from "react";
import { IMousePosition } from "../types";

type IMouseProps = {
	render: (position: IMousePosition) => JSX.Element;
}
type IMouseState = IMousePosition;
export default class Mouse extends PureComponent<IMouseProps, IMouseState> {
	constructor(props: IMouseProps) {
		super(props);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.state = { x: 0, y: 0 };
	}

	handleMouseMove(event: MouseEvent) {
		this.setState({
			x: event.clientX,
			y: event.clientY
		});
	}

	render() {
		return (
			<div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
				{this.props.render(this.state)}
			</div>
		);
	}
}