import NavBar from "./Components/NavBar"
//import Posts from "./Components/Posts"
import { useState } from "react"
import Search from "./pages/Search"
import Explore from "./pages/Explore"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
<<<<<<< HEAD
import {Form, Route, Routes} from "react-router-dom"
import Footer from './Components/Footer';
import Form from './Components/Form';
=======
import {Route, Routes} from "react-router-dom"
import "./App.scss";
import Slider from "./Components/slider/SLider";
>>>>>>> 3d64a693f65a0519ab195e3f1df28991da85c99c

function App() {
  return (
    <div>
      < Slider/>
    </div>
  );
}


  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     start: "Athens, GA",
  //     end: "Atlanta, GA",
  //     image: "insert_image"
  //   },
  //   {
  //     id: 2,
  //     start: "New York City, NY",
  //     end: "Dallas, TX",
  //     image: "insert_image"
  //   }
  // ])
  
  

  return (
    <div>
      <>
        <NavBar/>
        <div className = "container">
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/explore" element = {<Explore />} />
            <Route path = "/search" element = {<Search />} />
            <Route path = "/signUp" element = {<SignUp />} />
            <Route path = "/signIn" element = {<SignIn />} />

          </Routes>
          

          <Form />




        </div>
        {}
      </>
    </div>
  );


export default App;
