import React, { useState } from "react";

export interface Data {
  name: string;
  age: string;
  email: string;
}

const ItemList: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState<Data[]>([]);

  const onClick = () => {
    setGuests([...guests, { name, age, email }]);
  };
  return (
    <>
      <div>
        <h1>Guest List</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          name="age"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <button onClick={onClick}>Add Guest</button>
        {guests.map((item, index) => (
          <li key={index}>
            {item.name} {item.age} {item.email}
          </li>
        ))}
      </div>
    </>
  );
};

export default ItemList;
