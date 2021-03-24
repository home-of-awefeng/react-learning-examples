import React, { Component } from "react";
import { IMousePosition } from "../types";

type ICatProps = { mouse: IMousePosition };
export default class Cat extends Component<ICatProps> {
	render() {
		const mouse = this.props.mouse;
		return (
			<div style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: "4px", height: "4px", borderRadius: "2px", background: "red"}} ></div>
		);
	}
}