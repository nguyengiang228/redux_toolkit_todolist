import { useDispatch, useSelector } from "react-redux";
import { personSelector } from "../../redux/feature/reducer.slice";
import { removePerson, deleteAll } from "../../redux/feature/reducer.slice";

const HomeChild = () => {
  const persons = useSelector(personSelector);
  const dispatch = useDispatch();

  return (
    <>
      {persons.map((person, index) => (
        <div key={index}>
          <div>
            {person.name}
            <button onClick={() => dispatch(removePerson({ id: person.id }))}>
              X
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => dispatch(deleteAll())}>DELETE ALL</button>
    </>
  );
};

export default HomeChild;
