import { ChildasFC } from "./Child";
import React from "react";

const Parent = () => {
  const onClick = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      {/* <Child color="red" onClick={onClick}>cjvhbkjbkj</Child> */}
      <ChildasFC color="red" onClick={onClick}>
        gkadfgjlha
      </ChildasFC>
    </div>
  );
};

export default Parent;
