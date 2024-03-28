import React from "react";
import { useState } from "react";

const Body = () => {
  const [listOfStudents, setListOfStudents] = useState([
    { name: "Alice", id: "12345" },
    { name: "Bob", id: "67890" },
    { name: "Charlie", id: "54321" },
    { name: "Emily", id: "6529" },
  ]);

  const handleClickUp = (index) => {
    if (index === 0) {
        let newListOfStudents = [...listOfStudents];
        newListOfStudents[0] = listOfStudents[listOfStudents.length - 1];
        newListOfStudents[listOfStudents.length - 1] = listOfStudents[0];
       setListOfStudents(newListOfStudents);
    } else {
        let newListOfStudents = [...listOfStudents];
        newListOfStudents[index -1] = listOfStudents[index];
        newListOfStudents[index] = listOfStudents[index-1];
        setListOfStudents(newListOfStudents);
    }
  };

  const handleClickDown = (index) => {
    if (index === listOfStudents.length - 1) {
       let newListOfStudents = [...listOfStudents];
       newListOfStudents[index] = listOfStudents[0];
       newListOfStudents[0]  = listOfStudents[index];
       setListOfStudents(newListOfStudents);
    } else {
      let newListOfStudents = [...listOfStudents];
      newListOfStudents[index] = listOfStudents[index + 1];
      newListOfStudents[index + 1] = listOfStudents[index];
       setListOfStudents(newListOfStudents);
    }
  };


  return (
    <div className="body">
      {listOfStudents.map((student, index) => (
        <div className="student-wrapper"  key={student.id}>
          <p className="stdName">
            {index+1}. {student.name}  
          </p>
          <div className="btn-wrapper">
          <button className="btnUp" onClick={() => handleClickUp(index)}>
            Up
          </button>
          <button className="btnDown" onClick={() => handleClickDown(index)}>
            Down
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
