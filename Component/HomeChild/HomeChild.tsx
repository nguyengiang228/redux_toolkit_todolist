import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  deletePersonById,
  personSelector,
  updatePersonById,
} from "../../redux/feature/user.slice";
import { IPerson } from "../../interfaces/person";

interface HomeChildProps {
  nameValue: string;
}

const HomeChild = ({ nameValue }: HomeChildProps) => {
  const persons = useSelector(personSelector);
  const dispatch = useDispatch();

  // console.log(persons);

  const handleDeleteIdPerson = (id: number) => {
    dispatch(deletePersonById({ id }));
  };

  const handleUpdatePerson = (id: number) => {
    const editPerson: IPerson = {
      id: id,
      name: nameValue,
    };
    dispatch(updatePersonById(editPerson));
  };
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <>
      {persons.map((person, index) => (
        <div key={index}>
          <div>
            {person.name}
            <button onClick={() => handleDeleteIdPerson(person.id)}>X</button>
            <button onClick={() => handleUpdatePerson(person.id)}>EDIT</button>
          </div>
        </div>
      ))}
      <button onClick={() => handleDeleteAll()}>DELETE ALL</button>
    </>
  );
};

export default HomeChild;
