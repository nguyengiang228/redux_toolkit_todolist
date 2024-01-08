import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../../redux/feature/reducer.slice";

const HomePage = () => {
  const [nameValue, setNameValue] = useState(" ");
  const dispatch = useDispatch();

  const handleClick = () => {
    const personValue = {
      name: nameValue,
    };
    setNameValue("");
    dispatch(addPerson(personValue));
  };
  return (
    <div>
      <input
        type="text"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default HomePage;
