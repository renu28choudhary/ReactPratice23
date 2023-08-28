import React, { useState } from "react";

function NamesLIst() {
  const names = ["Deepa", "Retchie", "Smitha", "James"];
  let revNames = names.reverse();
  const [isClicked, setIsClicked] = useState(false);
  const namesList = names.map((item,index) => <div key={index}>{item}</div>);
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <div>{namesList}</div>
      <button onClick={handleClick}>Reverse</button>
      {isClicked && <div>{revNames}</div>}
    </div>
  );
}

export default NamesLIst;
