import React from "react";

function NameList() {
  const names = ["captain", "IronMan", "THor", "Hulk"];
  const nameList = names.map((item,index) => <h1 key={index}>{item}</h1>);
  return <div>{nameList}</div>;
}

export default NameList;
