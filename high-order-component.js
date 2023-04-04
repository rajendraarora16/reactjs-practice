/**
 *  High order component react example
 */
import React, { useState } from "react";
import "./styles.css";

/* component 1 */
const Component1 = (props) => {
  console.log("component1 props: ", props);
  return (
    <div>
      <h1>Component1 Count: {props.count}</h1>
      <button onClick={props.handleClick}>click</button>
    </div>
  );
};


/* component 2 */
const Component2 = (props) => {
  console.log("component2 props: ", props);
  return (
    <div>
      <h1>Component2 Count: {props.count}</h1>
      <button onClick={props.handleClick}>click</button>
    </div>
  );
};

/**
 * HOC Wrapper
 */
const HOC = (WrapperFunction) => {
  const Wrapper = (props) => {
    const handleClick = () => {
      setCount(count + 1);
    };
    const [count, setCount] = useState(0);
    return (
      <WrapperFunction handleClick={handleClick} count={count} {...props} />
    );
  }
  return Wrapper;
};

const Comp1 = HOC((props) => {
  return <Component1 {...props} />;
});

const Comp2 = HOC((props) => {
  return <Component2 {...props} />;
});

export default function App() {
  return (
    <div className="App">
      <Comp1 name="abc1" />
      <Comp2 name="abc2" />
    </div>
  );
}

