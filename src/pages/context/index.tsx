import React from "react";

const MyContext = React.createContext(111);

class MyClass extends React.Component {
	componentDidMount() {
		console.log('componentDidMount', this.context);
		/* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
	}
	componentDidUpdate() {
		console.log('componentDidUpdate', this.context);
		/* ... */
	}
	componentWillUnmount() {
		console.log('componentWillUnmount', this.context);
		/* ... */
	}
	render() {
		/* 基于 MyContext 组件的值进行渲染 */
		return <h6>{ this.context }</h6>
	}
}

MyClass.contextType = MyContext;

export default function ContextPage () {
	return (
		<div>
			<MyClass/>
			<p><a href="https://github.com/facebook/react/issues/15156#issuecomment-474590693" target="_blank">useContext memoization optimization</a></p>
		</div>
	)
}