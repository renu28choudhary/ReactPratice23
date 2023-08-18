import React from "react";

function NameList() {
  const names = ["Flash", "Wonderwomen", "Batman", "superman"];
  const nameList = names.map((item,index) => <h5 key={index}>{item}</h5>);
  return <div>{nameList}</div>;
}

export default NameList;
