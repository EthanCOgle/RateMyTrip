import NavBar from "./Components/NavBar"
//import Posts from "./Components/Posts"
//import { useState } from "react"
import Search from "./pages/Search"
import Explore from "./pages/Explore"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"

function App() {
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
        </div>
        {}
      </>
    </div>
  );
}

export default App;
