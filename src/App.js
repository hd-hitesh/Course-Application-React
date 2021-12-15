import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./component/Home";

// import Header from "./component/Header";

function App() {

  const btnHandle= ()=>{
    // toast("This is my first message");
    toast.success("Done!",{
      position:"top-center"
    });
  };

  return (
    <div>
      <ToastContainer/>
      <Home/>
        {/* <h1> This is react app</h1>
        <Button color="warning" outline onClick={btnHandle}>First React Button</Button> */}
      
    </div>
  );
}

export default App;

// return (
//   <div>
//     <Header name="Hitesh Sahu" title="First Card"/>
//     <hr/>
//     <Header name="Muskan Sahu" title="Second Card"/>    {/*props*/}
//     <hr/>
//     <h1>This is my react Application</h1>
//     <Header name="Hiteshhhhhhh Sahu" title="Third Card"/>
//     <hr/>
//   </div>
// );
