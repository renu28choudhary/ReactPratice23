import React from "react";
import Employee from "./Employee";

function EmployeeList() {
  const employee = [
    {
      id: 1,
      emplyoeeName: "captain",
      role: "solider",
    },
    {
      id: 2,
      emplyoeeName: "Iron Man",
      role: "Engineer",
    },
    {
      id: 3,
      emplyoeeName: "THor",
      role: "dummy god",
    },
    {
      id: 4,
      emplyoeeName: "Hulk",
      role: "scientist",
    },
  ];
  const employeeList = employee.map((item) => (
    <Employee key={item.id} item={item} />
  ));
  return <div>{employeeList}</div>;
}

export default EmployeeList;
