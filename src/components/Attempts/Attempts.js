import React from "react";

function Attempts({attempts}) {
  if (attempts.length === 0) { return }

  return (
  <div className="guess-results">
    {attempts.map(
      (a)=>(<div className="guess" key={a.id}>{a.value}</div>)
    )}
  </div>);
}

export default Attempts;
