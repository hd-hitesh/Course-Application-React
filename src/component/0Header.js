import react from "react";

function Header({name,title}) {      {/*Object Destructuring*/}
  return (
  <div style={ {background:"Yellow", padding:20 , width:400} }>
      <h1>{title}</h1>  {/*String manipulation*/}
      <h1>{name}</h1>  {/*String manipulation*/}
      <p>This is header component</p>
  </div>
  );
}

export default Header;
