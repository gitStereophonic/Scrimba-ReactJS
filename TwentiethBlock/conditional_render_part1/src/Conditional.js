import React from "react";

function Conditional(props) {
  // return props.isLoading ? <h1>Loading...</h1> : <h1>Loading completed!</h1>;
  return (
    <div>
      <h1>Header</h1>
      {props.isLoading ? <h1>Loading...</h1> : <h1>Loading completed!</h1>}
      <h2>Footer</h2>
    </div>
  );
}

export default Conditional;
