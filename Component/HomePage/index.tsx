import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, personSelector } from "../../redux/feature/user.slice";
import { IPerson } from "../../interfaces/person";
import HomeChild from "../HomeChild/HomeChild";

const HomePage = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const dispatch = useDispatch();
  const personList = useSelector(personSelector);

  const handleAddPerson = () => {
    const personValue: IPerson = {
      id: personList.length,
      name: nameValue,
    };
    setNameValue("");
    dispatch(addPerson(personValue));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={nameValue} onChange={handleChangeInput} />
        <button onClick={handleAddPerson}>ADD</button>
      </div>

      <HomeChild nameValue={nameValue} />
    </>
  );
};

export default HomePage;
