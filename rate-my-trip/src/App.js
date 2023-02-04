import NavBar from "./Components/NavBar"
import Posts from "./Components/Posts"
import { useState } from "react"

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      start: "Athens, GA",
      end: "Atlanta, GA",
      image: "insert_image"
    },
    {
      id: 2,
      start: "New York City, NY",
      end: "Dallas, TX",
      image: "insert_image"
    }
  ])
  return (
    <div>
      <NavBar className="navbar"/>
    </div>
  );
}

export default App;
