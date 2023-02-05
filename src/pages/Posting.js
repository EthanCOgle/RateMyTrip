import AddPost from "../../client/src/Components/AddPost"

const Posting = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      start: "Atlanta, GA",
      end: "Athens, GA",
      image: null,
      date: "March, 2023",
      description: "Pretty fun, hasn't happened yet"
    }
  ])

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newPost = { id, ...post }
    setPosts([...posts, newPost])
  }
  return (
    <div>
      <h1>Posting</h1>
      <AddPost onAdd={addPost}/>
    </div>
  )
}

export default Posting