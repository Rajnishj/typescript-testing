import React, { useEffect, useState } from "react";
import List from "../../List";

export interface Data {
  name: string;
  age: string;
  email: string;
}
export interface Item {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const GuestList: React.FC = () => {
  const initialState = {
    name: "",
    age: "",
    email: "",
  };
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");

  const [input, setInput] = useState(initialState);
  const [guests, setGuests] = useState<Data[]>([]);
  const [lists, setLists] = useState<Item[]>([]);
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setLists(data.slice(0, 5));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(lists);
  const onClick = () => {
    setGuests([
      ...guests,
      { name: input.name, age: input.age, email: input.email },
    ]);
    setInput(initialState);
  };
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>
        <h1>Guest List</h1>
        <input
          type="text"
          value={input.name}
          // onChange={(e) => setName(e.target.value)}
          onChange={onChangeHandle}
          name="name"
        />
        <input
          type="number"
          value={input.age}
          // onChange={(e) => setAge(e.target.value)}
          onChange={onChangeHandle}
          name="age"
        />
        <input
          type="email"
          value={input.email}
          // onChange={(e) => setEmail(e.target.value)}
          onChange={onChangeHandle}
          name="email"
        />
        <button onClick={onClick}>Add Guest</button>
        {guests.map((item, index) => (
          <li key={index}>
            {item.name} {item.age} {item.email}
          </li>
        ))}
      </div>
      <div>
        <List lists={lists} setLists={setLists} guests={guests} />
      </div>
    </>
  );
};

export default GuestList;
