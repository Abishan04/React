import React, { useState } from "react";
import "./Student.css";
import { data } from "../../data/dataset.js";
import Card from "../card/card.jsx";

export default function Student() {
  const [students, setStudents] = useState(data);
  const [totalStudents, setTotalStudents] = useState(data.length);
  const handlerDelete = () => {
    setStudents([]);
    setTotalStudents(0);
  };
  const handlerRestore = () => {
    setStudents(data);
    setTotalStudents(data.length);
  };
  const handlerRemove = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
    setTotalStudents(filteredStudents.length);
  };
  return (
    <div>
      <h1>Total Students: {totalStudents}</h1>
      <div>
        {students.map((student) => (
          <Card key={student.id}>
            <p>
              <strong>ID:</strong> {student.id}
            </p>
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>
              <strong>Age:</strong> {student.age}
            </p>
            <p>
              <strong>Grade:</strong> {student.grade}
            </p>
            <button onClick={() => handlerRemove(student.id)}>Delete</button>
          </Card>
        ))}
      </div>
      <button onClick={handlerDelete}>Delete All</button>
      <button onClick={handlerRestore}>Restore</button>
    </div>
  );
}
