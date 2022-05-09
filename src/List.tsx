import React, { useState } from "react";
import { Data, Item } from "./props/state/GuestList";
interface Props {
  lists: Item[];
  guests: Data[];
  setLists: React.Dispatch<React.SetStateAction<Item[]>>;
}

const List: React.FC<Props> = ({ lists, setLists, guests }) => {
  console.log(guests);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // const Data = {
  //   id: Date.now(),
  //   title: "Hello",
  //   body: "Hello world",
  //   userId: 100,
  //   man: "hjsskl",
  // };
  const onClick = () => {
    setLists([...lists]);
    setIsClicked(true);
  };

  return (
    <p>
      {isClicked &&
        lists.map((item) => (
          <li key={item.id}>
            {item.title} {item.userId}
          </li>
        ))}
      <button onClick={onClick}>Show User</button>
    </p>
  );
};

export default List;
