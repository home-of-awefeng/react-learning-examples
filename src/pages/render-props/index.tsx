import React, { Component, MouseEvent, PureComponent } from "react";

interface IMousePosition {
	x: number;
	y: number;
}

type ICatProps = { mouse: IMousePosition };
class Cat extends Component<ICatProps> {
	render() {
		const mouse = this.props.mouse;
		return (
			<div style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: "4px", height: "4px", borderRadius: "2px", background: "red"}} ></div>
		);
	}
}

type IMouseProps = {
	render: (position: IMousePosition) => JSX.Element;
}
type IMouseState = IMousePosition;
class Mouse extends PureComponent<IMouseProps, IMouseState> {
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

export default function RenderPropsPage () {
	const renderTheCat = (mouse: IMousePosition) => {
		return <Cat mouse={mouse} />;
	}
	return (
		<div>
			<h1>Move the mouse around!</h1>
			<Mouse render={renderTheCat} />
			{/*<Mouse render={(mouse: IMousePosition) => <Cat mouse={mouse} />} />*/}
		</div>
		)
}