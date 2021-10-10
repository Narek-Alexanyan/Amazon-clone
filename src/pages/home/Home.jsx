import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions";
import { decrement } from "../../actions";

export default function Home() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = "Amazon-clone.am";
  }, []);
  return (
    <div>
      <h1>Home page</h1>
      <h2>Counter { counter }</h2>
      <button onClick={() => dispatch(decrement(5))}>minus -</button>
      <button onClick={() => dispatch(increment(5))}>plus +</button>
    </div>
  );
}
