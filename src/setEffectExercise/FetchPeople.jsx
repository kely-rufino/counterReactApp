import { useState } from "react";
import "./FetchPeople.css";

export const LoadPeople = () => {
  const [isLoading, setLoadState] = useState(false);
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    setPeople([]);
    setLoadState(true);
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    const peopleData = data.data;
    setPeople(peopleData);
    setLoadState(false);
  };

  return (
    <div className="header">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button
          className="button"
          onClick={() => {
            fetchPeople();
          }}
        >
          {" "}
          Show People{" "}
        </button>
      )}
      <div className="people">
        {people.length
          ? people.map((person) => (
              <>
                <p key={person.id}>
                  {" "}
                  <div className="names-list">
                    Name: {person.first_name} {person.last_name}
                    <div className="email-list"> email: {person.email} </div>
                  </div>
                </p>
              </>
            ))
          : null}
      </div>
    </div>
  );
};
