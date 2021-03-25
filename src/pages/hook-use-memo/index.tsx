import React, { memo, useCallback, useMemo, useState } from "react";

interface IChild1Props {
	name: { name: string; color: string };
	setName: (name: string) => void;
}

const Child1 = ({ name, setName }: IChild1Props) => {
	return (
		<>
			<h4 style={{ color: name.color }}>我是因为 props name value 不是原始类型而使用了 useMemo 的子组件 {name.name}</h4>
			<button onClick={() => setName("新子组件name")}>改变name</button>
			<p>我被渲染了: { +new Date()}</p>
			<hr />
		</>
	);
};

interface IChild2Props {
	name: string;
	setName: (name: string) => void;
}

const Child2 = ({ name, setName }: IChild2Props) => {
	return (
		<>
			<h4>我是 props name value 是原始类型的子组件 {name}</h4>
			<button onClick={() => setName("新子组件name")}>改变name</button>
			<p>我被渲染了: { +new Date()}</p>
			<hr />
		</>
	);
};

const ChildMemo1 = memo(Child1);
const ChildMemo2 = memo(Child2);

export default function UseMemoPage () {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("子组件name");

	return (
		<>
			<button
				onClick={(_) => {
					setCount(count + 1);
				}}
			>
				父组件 count 增加
			</button>
			<p>count:{count}</p>
			<ChildMemo1
        name={useMemo(
          () => ({
            name,
            color: name.indexOf("name") !== -1 ? "red" : "green"
          }),
          [name]
        )}
        setName={useCallback((newName: string) => setName(newName), [])}
      />

			<ChildMemo2
				name={name}
				setName={useCallback((newName: string) => setName(newName), [])}
			/>
		</>
	);
}
