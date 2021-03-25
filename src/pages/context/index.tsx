import React from "react";

const MyContext = React.createContext(111);

class MyClass extends React.Component {
	componentDidMount() {
		let value = this.context;
		/* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
	}
	componentDidUpdate() {
		let value = this.context;
		/* ... */
	}
	componentWillUnmount() {
		let value = this.context;
		/* ... */
	}
	render() {
		let value = this.context;
		/* 基于 MyContext 组件的值进行渲染 */
		return <h6>{ value }</h6>
	}
}

MyClass.contextType = MyContext;

export default function ContextPage () {
	return (
		<div>
			<MyClass/>
		</div>
	)
}